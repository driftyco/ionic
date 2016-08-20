var buildConfig = require('./scripts/build/config');
var gulp = require('gulp');
var glob = require('glob');
var fs = require('fs');
var path = require('path');
var argv = require('yargs').argv;
var del = require('del');
var rename = require('gulp-rename');
var through2 = require('through2');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');
var tsc = require('gulp-typescript');
var cache = require('gulp-cached');
var remember = require('gulp-remember');
var minimist = require('minimist');
var connect = require('gulp-connect');
var docsConfig = require('./scripts/config.json');

var flagConfig = {
  string: ['port'],
  boolean: ['debug', 'typecheck'],
  alias: {'p': 'port'},
  default: { 'port': 8000, 'debug': true, 'typecheck': false }
};
var flags = minimist(process.argv.slice(2), flagConfig);

var DEBUG = flags.debug;
var TYPECHECK = flags.typecheck;


/**
 * Builds Ionic sources to dist. When the '--typecheck' flag is specified,
 * generates .d.ts definitions and does typechecking.
 */
gulp.task('build', function(done){
  runSequence(
    ['bundle', 'sass', 'fonts', 'copy.scss'],
    done
  );
});

function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}


function watchTask(task){
  watch([
      'src/**/*.ts',
      'src/components/*/test/**/*',
      '!src/util/test/*'
    ],
    function(file) {
      if (file.event === "unlink") {
        deleteFile(file);
      } else {
        console.log('start');
        gulp.start(task);
      }
    }
  );

  watch('src/**/*.scss', function() {
    gulp.start('sass');
  });

  gulp.start('serve');

  function deleteFile(file) {
    //TODO
    // var basePath = file.base.substring(0, file.base.lastIndexOf("ionic/"));
    // var relativePath = file.history[0].replace(file.base, '').replace('.ts', '.js');
    //
    // var filePath = basePath + 'dist/' + relativePath;
    // var typingPath = filePath.replace('.js', '.d.ts');
    //
    // delete cache.caches['no-typecheck'][file.history[0]];
    // remember.forget('no-typecheck', file.history[0]);
    //
    // del([filePath, typingPath], function(){
    //   gulp.start('build-systemjs-bundle');
    // });
  }
}

gulp.task('serve', function() {
  connect.server({
    port: flags.port,
    livereload: {
      port: 35700
    }
  });
});

/**
 * Transpiles TypeScript sources to ES5 in the CommonJS module format and outputs
 * them to dist. When the '--typecheck' flag is specified, generates .d.ts
 * definitions and does typechecking.
 */
gulp.task('transpile.es2015', function(done) {
  var exec = require('child_process').exec;
  var shellCommand = 'cp ./scripts/build/es2015NgcConfig.json ./es2015NgcConfig.json && ' +
    './node_modules/.bin/ngc -p ./es2015NgcConfig.json && ' +
    'cp src/components/slides/swiper-widget.es2015.js dist/esm/components/slides/swiper-widget.js && ' +
    'cp src/components/slides/swiper-widget.d.ts dist/esm/components/slides/';

  exec(shellCommand, function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});


/**
 * Creates CommonJS and SystemJS bundles from Ionic source files.
 */
gulp.task('release.bundle', ['transpile.cjs', 'transpile.es2015',]);


gulp.task('e2e.clean', function(done) {
  del(['dist-e2e'], done);
});

/**
 * Builds Ionic e2e tests to test.
 * - Copy all component test files to the test directory
 * - Create entry.ts and index.html file for each test.
 * - Create platform tests for each test
 */
gulp.task('e2e.setup', function() {
  var gulpif = require('gulp-if');
  var merge = require('merge2');
  var _ = require('lodash');
  var fs = require('fs');
  var VinylFile = require('vinyl');

  // Get each test folder with gulp.src
  var tsResult = gulp.src([
      'src/components/*/test/*/**/*.ts',
      '!src/components/*/test/*/**/*.spec.ts'
    ])
    .pipe(gulpif(/AppModule.ts$/, createIndexHTML()))
    .pipe(gulpif(/e2e.ts$/, createPlatformTests()))

  var testFiles = gulp.src([
      'src/components/*/test/*/**/*',
      '!src/components/*/test/*/**/*.ts'
    ]);

  return merge([
      tsResult,
      testFiles
    ])
    .pipe(rename(function(file) {
      var sep = path.sep;
      file.dirname = file.dirname.replace(sep + 'test' + sep, sep);
    }))
    .pipe(gulp.dest('dist-e2e/'))
    .pipe(connect.reload());

  function createIndexHTML() {
    var indexTemplate = fs.readFileSync('scripts/e2e/index.html');
    var indexTs = fs.readFileSync('scripts/e2e/entry.ts');

    return through2.obj(function(file, enc, next) {
      this.push(new VinylFile({
        base: file.base,
        contents: new Buffer(indexTemplate),
        path: path.join(path.dirname(file.path), 'index.html'),
      }));
      this.push(new VinylFile({
        base: file.base,
        contents: new Buffer(indexTs),
        path: path.join(path.dirname(file.path), 'entry.ts'),
      }));
      next(null, file);
    });
  }

  function createPlatformTests(file) {
    var platforms = [
      'android',
      'ios',
      'windows'
    ];

    var testTemplate = _.template(fs.readFileSync('scripts/e2e/e2e.template.js'));

    return through2.obj(function(file, enc, next) {
      var self = this;
      var relativePath = path.dirname(file.path.replace(/^.*?src(\/|\\)components(\/|\\)/, ''));
      relativePath = relativePath.replace('/dist-e2e/', '/');
      var contents = file.contents.toString();
      platforms.forEach(function(platform) {
        var platformContents = testTemplate({
          contents: contents,
          buildConfig: buildConfig,
          relativePath: relativePath,
          platform: platform
        });
        self.push(new VinylFile({
          base: file.base,
          contents: new Buffer(platformContents),
          path: file.path.replace(/e2e.js$/, platform + '.e2e.js')
        }));
      })
      next();
    })
  }
});

gulp.task('e2e.transpile', function(done) {

  function updateE2eNgc(e2eFolder) {
    var e2eNgc = require('./scripts/e2e/NgcConfig.json');

    // If an e2efolder parameter was passed then only transpile that directory
    if (e2eFolder) {
      e2eNgc.include = [
        "dist-e2e/" + e2eFolder + "/entry.ts",
        "dist-e2e/" + e2eFolder + "/AppModule.ts"
      ]
    } else {
      e2eNgc.include = [
        "dist-e2e/**/entry.ts",
        "dist-e2e/**/AppModule.ts"
      ];
    }
    fs.writeFileSync('./e2eNgcConfig.json', JSON.stringify(e2eNgc, null, 2));
  }

  updateE2eNgc(flags.e2efolder);
  var exec = require('child_process').exec;
  var shellCommand = 'node --max_old_space_size=8096 ./node_modules/.bin/ngc -p ./e2eNgcConfig.json';

  exec(shellCommand, function(err, stdout, stderr) {
    del('./e2eNgcConfig.json');
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

/**
 * Task: e2e.pre-webpack
 * Dynamically build webpack entryPoints
 * Update index.html file that lists all e2e tasks
 */
gulp.task('e2e.pre-webpack', function(done) {
  /**
   * Find all AppModule.ts files because the act as the entry points
   * for each e2e test.
   */
  glob('dist-e2e/*/**/AppModule.ts', {}, function(er, files) {

    var directories = files.map(function(file) {
      return path.dirname(file);
    });

    var webpackEntryPoints = directories.reduce(function(endObj, dir) {
      endObj[path.join(dir, 'index')] = "./" + path.join(dir, 'entry');
      return endObj;
    }, {});

    indexFileContents = directories.map(function(dir) {
      var fileName = dir.replace(/test\//, '');
      return '<p><a href="./' + fileName + '/index.html">' + fileName + '</a></p>'
    }, []);

    fs.writeFileSync('./scripts/e2e/webpackEntryPoints.json', JSON.stringify(webpackEntryPoints, null, 2));
    fs.writeFileSync('./dist-e2e/index.html',
      '<!DOCTYPE html><html lang="en"><head></head><body style="width: 500px; margin: 100px auto">\n' +
      indexFileContents.join('\n') +
      '</center></body></html>'
    );
    done();
  });
});

gulp.task('e2e.webpack', function(done) {
  var webpackConfig = './scripts/e2e/webpack.config.js;'
  var exec = require('child_process').exec;
  var shellCommand = 'node --max_old_space_size=8096 ./node_modules/.bin/webpack --config ' + webpackConfig;

  exec(shellCommand, function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

gulp.task('e2e.resources', function(done) {
  runSequence(
    'e2e.setup',
    'e2e.transpile',
    done
  );
});

 /**
  * Builds e2e tests to dist/e2e and watches for changes.  Runs 'build-systemjs-bundle' or
  * 'sass' on Ionic source changes and 'e2e.build' for e2e test changes.
  */
gulp.task('watch.e2e', ['sass', 'fonts'], function() {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./scripts/e2e/webpack.config.js');
  config.output.path = __dirname;
  config.entry = {
    "dist-e2e/vendor": "./scripts/e2e/vendor",
    "dist-e2e/polyfills": "./scripts/e2e/polyfills"
  };
  config.entry['dist-e2e/' + flags.e2efolder + '/index'] = './dist-e2e/' + flags.e2efolder + '/entry';

  var compiler = webpack(config);

  // If any tests change within components then run e2e.resources.
  watch([
    'src/components/*/test/**/*'
  ],
  function(file) {
      console.log('start e2e.resources - ' + JSON.stringify(file.history, null, 2));
      gulp.start('e2e.resources');
  });

  // If any src files change except for tests then transpile only the source ionic files
  watch([
    'src/**/*.ts',
    '!src/components/*/test/**/*',
    '!src/util/test/*'
  ],
  function(file) {
      console.log('start build.cjs.ngc - ' + JSON.stringify(file.history, null, 2));
      gulp.start('build.cjs.ngc');
  });

  // If any scss files change then recompile all sass
  watch([
    'src/**/*.scss'
  ],
  function(file) {
      console.log('start sass - ' + JSON.stringify(file.history, null, 2));
      gulp.start('sass');
  });

  new WebpackDevServer(compiler, {
    noInfo: true,
    quiet: false,
    watchOptions: {
      aggregateTimeout: 2000,
      poll: 1000
    }
  }).listen(8080, "localhost", function(err) {
      if(err) {
        throw new Error("webpack-dev-server", err);
      }
      console.log("[webpack-dev-server]", "http://localhost:8080/dist-e2e/" + flags.e2efolder);
  });
});

gulp.task('build.e2e', function(done) {
  runSequence(
    'clean',
    'build.cjs.ngc',
    ['e2e.resources', 'sass', 'fonts'],
    'e2e.pre-webpack',
    'e2e.webpack',
    done
  );
})

gulp.task('build.cjs.ngc', function(done) {
  buildCommonJsNgc( function() {
    gulp.src(['src/components/slides/swiper-widget.js', 'src/components/slides/swiper-widget.d.ts'])
      .pipe(gulp.dest('./dist/components/slides/'))
      .on('end', done);
  });
});

function buildCommonJsNgc(doneCallback) {
  var exec = require('child_process').exec;
  var shellCommand = 'cp ./scripts/build/commonjsNgcConfig.json ./commonjsNgcConfig.json && ' +
    './node_modules/.bin/ngc -p ./commonjsNgcConfig.json';

  exec(shellCommand, function(err, stdout, stderr) {
    del('./commonjsNgcConfig.json');
    console.log(stdout);
    console.log(stderr);
    doneCallback(err);
  });
}

/**
 * Compiles Ionic Sass sources to stylesheets and outputs them to dist/bundles.
 */
gulp.task('sass', function() {
  var sass = require('gulp-sass');
  var autoprefixer = require('gulp-autoprefixer');
  var minifyCss = require('gulp-minify-css');

  gulp.src([
    'src/ionic.ios.scss',
    'src/ionic.md.scss',
    'src/ionic.wp.scss',
    'src/ionic.scss'
  ])
  .pipe(sass({
      includePaths: [__dirname + '/node_modules/ionicons/dist/scss/'],
    }).on('error', sass.logError)
  )
  .pipe(autoprefixer(buildConfig.autoprefixer))
  .pipe(gulp.dest('dist-test/bundles/'))
  .pipe(gulp.dest('dist/bundles/'))
  .pipe(gulp.dest('dist-e2e/css/'))
  .pipe(minifyCss())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('dist-test/bundles/'))
  .pipe(gulp.dest('dist/bundles/'))
  .pipe(gulp.dest('dist-e2e/css/'))
});

/**
 * Creates Ionic themes for testing.
 */
gulp.task('sass.themes', function() {
  var sass = require('gulp-sass');
  var autoprefixer = require('gulp-autoprefixer');

  function buildTheme(mode) {
    gulp.src([
      'scripts/e2e/ionic.' + mode + '.dark.scss'
    ])
    .pipe(sass({
        includePaths: [__dirname + '/node_modules/ionicons/dist/scss/'],
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer(buildConfig.autoprefixer))
    .pipe(gulp.dest('dist/bundles/'))
    .pipe(gulp.dest('dist-test/css/'))
    .pipe(gulp.dest('dist-e2e/css/'));
  }

  buildTheme('ios');
  buildTheme('md');
  buildTheme('wp');
});

/**
 * Copies fonts and Ionicons to dist/fonts
 */
gulp.task('fonts', function() {
  gulp.src([
    'src/fonts/*.+(ttf|woff|woff2)',
    'node_modules/ionicons/dist/fonts/*.+(ttf|woff|woff2)'
   ])
    .pipe(gulp.dest('dist-test/fonts'))
    .pipe(gulp.dest('dist/fonts'))
    .pipe(gulp.dest('dist-e2e/fonts/'))
});

/**
 * Copies Ionic Sass sources to dist
 */
gulp.task('copy.scss', function() {
  return gulp.src([
      'src/**/*.scss',
      '!src/components/*/test/**/*',
      '!src/util/test/*'
    ])
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('dist-e2e'))
    .pipe(gulp.dest('dist-test'));
});

/**
 * Lint the scss files using a ruby gem
 */
gulp.task('lint.scss', function() {
  var scsslint = require('gulp-scss-lint');

  return gulp.src([
      'src/**/*.scss',
      '!src/components/*/test/**/*',
      '!src/util/test/*'
    ])
    .pipe(scsslint())
    .pipe(scsslint.failReporter());
});

/**
 * Test build tasks
 */

/**
 * Demos
 */

/**
 * Copies bundled demos from dist/demos to ../ionic-site/docs/v2 (assumes there is a
 * sibling repo to this one named 'ionic-site')
 */
gulp.task('demos', ['bundle.demos'], function() {
  var merge = require('merge2');

  var demosStream = gulp.src([
    'dist/demos/**/*',
    '!dist/demos/**/*.scss',
  ])
    .pipe(gulp.dest(docsConfig.docsDest + '/demos/'));

  var cssStream = gulp.src('dist/bundles/**/*.css')
    .pipe(gulp.dest(docsConfig.sitePath + '/dist/bundles'));

  return merge([demosStream, cssStream]);
 });

 /**
  * Builds necessary files for each demo then bundles them using webpack. Unlike
  * e2e tests, demos are bundled for performance (but have a slower build).
  */
gulp.task('bundle.demos', ['build.demos.old', 'transpile', 'sass', 'fonts'], function(done) {
  var glob = require('glob');
  var webpack = require('webpack');
  var path = require('path');

  return glob('dist/demos/**/index.js', function(err, files){
    var numTasks = files.length;
    files.forEach(function(file){
      var config = require('./scripts/demos/webpack.config.js');

      // add our bundle entry, removing previous if necessary
      // since config is cached
      if (config.entry.length > 3) {
        config.entry.pop();
      }
      config.entry.push('./' + file);
      config.output = {
        filename: path.dirname(file) + '/bundle.js'
      }

      webpack(config, function(err, stats){
        var statsOptions = {
         'colors': true,
          'modules': false,
          'chunks': false,
          'exclude': ['node_modules'],
          'errorDetails': true
        }
        console.log(stats.toString(statsOptions));
        if (--numTasks === 0) done();
      })
    })

  });
});

/**
 * Transpiles and copies Ionic demo sources to dist/demos.
 */
gulp.task('build.demos.old', function() {
  var gulpif = require('gulp-if');
  var merge = require('merge2');
  var _ = require('lodash');
  var fs = require('fs');
  var VinylFile = require('vinyl');

  var indexTemplateName = LOCAL_DEMOS ? 'index.template.dev.html' : 'index.template.html';
  var baseIndexTemplate = _.template(fs.readFileSync('scripts/demos/' + indexTemplateName))();

  console.log(flags);
  if (flags.production) {
    buildDemoSass(true);
  } else {
    buildDemoSass(false);
  }

  var tsResult = gulp.src(['demos/**/*.ts'])
    .pipe(cache('demos.ts'))
    .pipe(tsc(getTscOptions(), undefined, tscReporter))
    .on('error', function(error) {
      console.log(error.message);
    })
    .pipe(gulpif(/index.js$/, createIndexHTML())) //TSC changes .ts to .js

  var demoFiles = gulp.src([
      'demos/**/*',
      '!demos/**/*.ts'
    ])
    .pipe(cache('demos.files'));

  return merge([
      tsResult,
      demoFiles
    ])
    .pipe(gulp.dest('dist/demos'))
    .pipe(connect.reload());

  function createIndexHTML() {
    return through2.obj(function(file, enc, next) {
      var indexTemplate = baseIndexTemplate;
      var customTemplateFp = file.path.split('/').slice(0, -1).join('/') + '/index.html';
      if (fs.existsSync(customTemplateFp)) {
        indexTemplate = _.template(fs.readFileSync(customTemplateFp))();
      }
      this.push(new VinylFile({
        base: file.base,
        contents: new Buffer(indexTemplate),
        path: path.join(path.dirname(file.path), 'index.html'),
      }));
      next(null, file);
    });
  }
});

function buildDemoSass(isProductionMode) {
  var sass = require('gulp-sass');
  var autoprefixer = require('gulp-autoprefixer');
  var minifyCss = require('gulp-minify-css');
  var concat = require('gulp-concat');

  var sassVars = isProductionMode ? 'demos/app.variables.production.scss': 'demos/app.variables.local.scss';

  (function combineSass() {
    gulp.src([
        sassVars,
        'demos/app.variables.scss',
        'demos/app.ios.scss'
      ])
    .pipe(concat('output.ios.scss'))
    .pipe(gulp.dest('demos/'))

    gulp.src([
        sassVars,
        'demos/app.variables.scss',
        'demos/app.md.scss'
      ])
    .pipe(concat('output.md.scss'))
    .pipe(gulp.dest('demos/'))

    gulp.src([
        sassVars,
        'demos/app.variables.scss',
        'demos/app.wp.scss'
      ])
    .pipe(concat('output.wp.scss'))
    .pipe(gulp.dest('demos/'))

  })();

  gulp.src([
    'demos/output.ios.scss',
    'demos/output.md.scss',
    'demos/output.wp.scss'
  ])

  .pipe(sass({
      includePaths: [__dirname + '/node_modules/ionicons/dist/scss/'],
    }).on('error', sass.logError)
  )
  .pipe(autoprefixer(buildConfig.autoprefixer))
  .pipe(gulp.dest('dist/demos/'))
  .pipe(minifyCss())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('dist/bundles/'));
}



gulp.task('demos.clean', function(done) {
  del(['dist/demos/**', '!dist/demos'], done);
});
gulp.task('demos.setup', function() {
  var merge = require('merge2');
  var srcFolder = 'demos/';
  var destFolder = 'dist/demos/';
  var folderList = getFolders(srcFolder);

  var tasks = folderList.map(function(folder) {
    return gulp.src(path.join(srcFolder, folder, '/**/*'))
      .pipe(gulp.dest(path.join(destFolder, folder)));
  });

  var other = folderList.map(function(folder) {
    return gulp.src([
        'scripts/demos/entry.ts',
        'scripts/demos/index.html'
      ])
      .pipe(gulp.dest(path.join(destFolder, folder)));
  });

  return merge(other);
});

gulp.task('demos.transpile', function(done) {
  function updateDemoNgc(demoFolder) {
    var demoNgc = require('./scripts/demos/ngcConfig.json');

    // If an demoFolder parameter was passed then only transpile that directory
    if (demoFolder) {
      demoNgc.include = [
        "dist/demos/" + demoFolder + "/**/entry.ts",
        "dist/demos/" + demoFolder + "/**/AppModule.ts"
      ]
    } else {
      demoNgc.include = [
        "dist/demos/**/entry.ts",
        "dist/demos/**/AppModule.ts"
      ];
    }
    fs.writeFileSync('./demoNgcConfig.json', JSON.stringify(demoNgc, null, 2));
  }

  updateDemoNgc(flags.demoFolder);
  var exec = require('child_process').exec;
  var shellCommand = 'node --max_old_space_size=8096 ./node_modules/.bin/ngc -p ./demoNgcConfig.json';

  exec(shellCommand, function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

gulp.task('demos.pre-webpack', function(done) {
  /**
   * Find all AppModule.ts files because the act as the entry points
   * for each e2e test.
   */
  glob('dist/demos/*/AppModule.ts', {}, function(er, files) {
    var directories = files.map(function(file) {
      return path.dirname(file);
    });

    var webpackEntryPoints = directories.reduce(function(endObj, dir) {
      endObj[path.join(dir, 'index')] = "./" + path.join(dir, 'entry');
      return endObj;
    }, {});

    fs.writeFileSync('./scripts/demos/webpackEntryPoints.json', JSON.stringify(webpackEntryPoints, null, 2));
    done();
  });
});

gulp.task('demos.webpack', function(done) {
  var webpackConfig = './scripts/demos/webpack.config.js;'
  var exec = require('child_process').exec;
  var shellCommand = 'node --max_old_space_size=8096 ./node_modules/.bin/webpack --config ' + webpackConfig;

  exec(shellCommand, function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

gulp.task('demos.resources', function(done) {
  runSequence(
    'demos.setup',
    'demos.transpile',
    done
  );
});

 /**
  * Builds e2e tests to dist/e2e and watches for changes.  Runs 'build-systemjs-bundle' or
  * 'sass' on Ionic source changes and 'e2e.build' for e2e test changes.
  */
gulp.task('watch.demos', function() {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./scripts/demos/webpack.config.js');
  config.output.path = __dirname;
  config.entry = {};
  config.entry['dist/demos/' + flags.demofolder + '/index'] = './dist/demos/' + flags.demofolder + '/entry';

  var compiler = webpack(config);

  watchTask('demos.resources');

  new WebpackDevServer(compiler, {
    quiet: true
  }).listen(8080, "localhost", function(err) {
      if(err) {
        throw new Error("webpack-dev-server", err);
      }
      console.log("[webpack-dev-server]", "http://localhost:8080/dist/demos/" + flags.demofolder);
  });
});

gulp.task('build.demos', function(done) {
  runSequence(
    'demos.clean',
    ['demos.resources', 'sass', 'fonts'],
    'demos.pre-webpack',
    'demos.webpack',
    done
  );
})




/**
 * Tests
 */
require('./scripts/snapshot/snapshot.task')(gulp, argv, buildConfig);




/**
 * Release
 */

 /**
  * Builds Ionic sources to dist with typechecking and d.ts definitions, does
  * some prerelease magic (see 'prepare') and copies npm package and tooling
  * files to dist.
  */
gulp.task('prerelease', function(done){
  runSequence(
    'validate',
    'prepare',
    'package',
    done
  );
});

/**
 * Publishes to npm and creates a new tag and release on GitHub.
 */
gulp.task('release', ['publish.npm', 'publish.github']);

/**
 * Pulls latest, ensures there are no unstaged/uncommitted changes, updates
 * package.json minor version and generates CHANGELOG for release.
 */
gulp.task('prepare', ['git-pull-latest'], function(){
  var semver = require('semver');
  var fs = require('fs');
  var changelog = require('gulp-conventional-changelog');

  //Update package.json version
  var packageJSON = require('./package.json');
  packageJSON.version = semver.inc(packageJSON.version, 'prerelease', 'beta');
  fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2));

  //Update changelog
  return gulp.src('./CHANGELOG.md')
    .pipe(changelog({
      preset: 'angular'
    }))
    .pipe(gulp.dest('./'));
});


gulp.task('git-pull-latest', function() {
  var execSync = require('child_process').execSync;
  var spawnSync = require('child_process').spawnSync;

  function fail(context, msg) {
    // remove gulp's 'Finished 'task' after 10ms' message
    context.removeAllListeners('task_stop');
    console.error('Prepare aborted.');
    console.error(msg);
  }

  //Check for uncommitted changes
  var gitStatusResult = execSync('git status --porcelain');
  if (gitStatusResult.toString().length > 0) {
    return fail(this, 'You have uncommitted changes, please stash or commit them before running prepare');
  }

  //Pull latest
  var gitPullResult = spawnSync('git', ['pull', 'origin', 'master']);
  if (gitPullResult.status !== 0) {
    fail('There was an error running \'git pull\':\n' + gitPullResult.stderr.toString());
  }
});

/**
 * Copies npm package and tooling files to dist.
 */
gulp.task('package', function(done){
  var fs = require('fs');
  var distDir = 'dist';

  gulp.src([
      'scripts/npm/.npmignore',
      'scripts/npm/README.md',
      '*tooling/**/*'
    ])
    .pipe(gulp.dest(distDir));

  var templatePackageJSON = require('./scripts/npm/package.json');
  var sourcePackageJSON = require('./package.json');
  var sourceDependencies = sourcePackageJSON.dependencies;

  // copy source package.json data to template
  templatePackageJSON.version = sourcePackageJSON.version
  templatePackageJSON.description = sourcePackageJSON.description
  templatePackageJSON.keywords = sourcePackageJSON.keywords

  // copy source dependencies versions to the template's peerDependencies
  // only copy dependencies that show up as peerDependencies in the template
  for (var dependency in sourceDependencies) {
    if (dependency in templatePackageJSON.peerDependencies) {
      templatePackageJSON.peerDependencies[dependency] = sourceDependencies[dependency];
    }
  }

  fs.writeFileSync(distDir + '/package.json', JSON.stringify(templatePackageJSON, null, 2));
  done();
});

/**
 * Creates a new tag and release on GitHub.
 */
gulp.task('publish.github', function(done){
  var changelog = require('conventional-changelog');
  var GithubApi = require('github');
  var packageJSON = require('./package.json');

  var github = new GithubApi({
    version: '3.0.0'
  });

  github.authenticate({
    type: 'oauth',
    token: process.env.GH_TOKEN
  });

  return changelog({
    preset: 'angular'
  })
  .pipe(through2.obj(function(file, enc, cb){
    github.releases.createRelease({
      owner: 'driftyco',
      repo: 'ionic',
      target_commitish: 'master',
      tag_name: 'v' + packageJSON.version,
      name: packageJSON.version,
      body: file.toString(),
      prerelease: true
    }, done);
  }));
});

/**
 * Publishes to npm.
 */
gulp.task('publish.npm', function(done) {
  var spawn = require('child_process').spawn;

  var npmCmd = spawn('npm', ['publish', './dist']);

  npmCmd.stdout.on('data', function (data) {
    console.log(data.toString());
  });

  npmCmd.stderr.on('data', function (data) {
    console.log('npm err: ' + data.toString());
  });

  npmCmd.on('close', function() {
    done();
  });
});

/**
 * Execute this task to validate current code and then
 */
gulp.task('publish.nightly', function(done){
  runSequence('git-pull-latest', 'validate', 'nightly', done);
});

/**
 * Publishes a new tag to npm with a nightly tag.
 * This will only update the dist package.json file.
 */
gulp.task('nightly', ['package'], function(done) {
  var fs = require('fs');
  var spawn = require('child_process').spawn;
  var packageJSON = require('./dist/package.json');

  // Generate a unique id formatted from current timestamp
  function createTimestamp() {
    // YYYYMMDDHHMM
    var d = new Date();
    return d.getUTCFullYear() + // YYYY
           ('0' + (d.getUTCMonth() +　1)).slice(-2) + // MM
           ('0' + (d.getUTCDate())).slice(-2) + // DD
           ('0' + (d.getUTCHours())).slice(-2) + // HH
           ('0' + (d.getUTCMinutes())).slice(-2); // MM
  }

  /**
   * Split the version on dash so that we can add nightly
   * to all production, beta, and nightly releases
   * 0.1.0                  -becomes-  0.1.0-r8e7684t
   * 0.1.0-beta.0           -becomes-  0.1.0-beta.0-r8e7684t
   * 0.1.0-beta.0-t5678e3v  -becomes-  0.1.0-beta.0-r8e7684t
   */
  packageJSON.version = packageJSON.version.split('-')
    .slice(0, 2)
    .concat(createTimestamp())
    .join('-');

  fs.writeFileSync('./dist/package.json', JSON.stringify(packageJSON, null, 2));

  var npmCmd = spawn('npm', ['publish', '--tag=nightly', './dist']);
  npmCmd.stdout.on('data', function (data) {
    console.log(data.toString());
  });

  npmCmd.stderr.on('data', function (data) {
    console.log('npm err: ' + data.toString());
  });

  npmCmd.on('close', function() {
    done();
  });
});




/**
 * Docs
 */
require('./scripts/docs/gulp-tasks')(gulp, flags)

/**
 * Tooling
 */
gulp.task('tooling', function(){
  gulp.src('*tooling/**/*')
    .pipe(gulp.dest('dist'));

  watch('tooling/**/*', function(){
    gulp.src('*tooling/**/*')
      .pipe(gulp.dest('dist'));
  })
});
























































function mergeObjects(obj1, obj2) {
  var obj3 = {};
  for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
  for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
  return obj3;
}

function getTscOptions() {
  var tsConfig = require('./tsconfig');
  // provide our own version of typescript
  tsConfig.compilerOptions.typescript = require('typescript');

  return tsConfig.compilerOptions;
}

function nativeTypescriptBuild(srcGlob, cacheName, overrideOptions) {
  var tsc = require('gulp-typescript');

  var compilerOptions = getTscOptions();
  if ( ! overrideOptions ) {
    overrideOptions = {};
  }
  var mergedOptions = mergeObjects(compilerOptions, overrideOptions);

  return gulp.src(srcGlob)
    .pipe(cache(cacheName, { optimizeMemory: true }))
    .pipe(tsc(mergedOptions));
}

/**
 * Builds Ionic unit tests to dist-test/tests.
 */
gulp.task('build-karma-tests', function() {
  return nativeTypescriptBuild(
      ['src/**/test/**/*.spec.ts'],
      'karma',
      { isolatedModules: true }
    ).pipe(rename(function(file) {
      var regex = new RegExp(path.sep + 'test(' + path.sep + '|$)');
      file.dirname = file.dirname.replace(regex, path.sep);
    }))
    .pipe(gulp.dest('dist-test/tests'))
});

gulp.task('watch.karma.tests', ['build-karma-tests'], function(){
  watch('src/**/test/**/*.spec.ts', function(){
    gulp.start('build-karma-tests');
  });
});

gulp.task('build-commonjs-testdist', function() {
  var tsResult = nativeTypescriptBuild(
    ['./src/**/*.ts', '!src/components/*/test/*/*.ts', 'src/**/*.spec.ts'],
    'commonjs',
    null
  )
  var js = tsResult.js;
  var dts = tsResult.dts;

  var merge = require('merge2');
  return merge([js, dts])
    .pipe(gulp.dest('./dist-test'));
});

gulp.task('copy-swiper-commonjs-testdist', function() {
  return gulp.src(['src/components/slides/swiper-widget.*'])
    .pipe(gulp.dest('./dist-test/components/slides'));
});

gulp.task('build-systemjs-bundle', function() {
  var babel = require('gulp-babel');
  var concat = require('gulp-concat');
  var gulpif = require('gulp-if');
  var stripDebug = require('gulp-strip-debug');
  var merge = require('merge2');
  var gulpStream = nativeTypescriptBuild(
    ['./src/**/*.ts', '!src/components/*/test/*/*.ts', 'src/**/*.spec.ts'],
    'system',
    {
      target: 'es6',
      module: 'es6'
    }
  );

  // We use Babel to easily create named System.register modules
  // See: https://github.com/Microsoft/TypeScript/issues/4801
  // and https://github.com/ivogabe/gulp-typescript/issues/211
  var babelOptions = {
    presets: ['es2015'],
    plugins: ['transform-es2015-modules-systemjs'],
    moduleIds: true,
    getModuleId: function(name) {
      return 'ionic-angular/' + name;
    }
  }

  gulpStream = gulpStream.pipe(babel(babelOptions));

  var swiper = gulp.src('src/components/slides/swiper-widget.system.js');
  return merge([gulpStream, swiper])
    .pipe(remember('system'))
    .pipe(stripDebug())
    .pipe(concat('ionic.system.js'))
    .pipe(gulp.dest('dist-test/bundles'))
    .pipe(connect.reload())
});

/**
 * Builds all of the dependencies needed before running karma
 */
gulp.task('build.karma', function(done){
  DEBUG = false;
  TYPECHECK = true;
  runSequence(
    'clean.karma',
    ['build-commonjs-testdist', 'copy-swiper-commonjs-testdist', 'build-systemjs-bundle', 'sass', 'fonts', 'copy.scss'],
    done
  );
});

gulp.task('clean.karma', function(done) {
  del(['dist-test'], done);
});

gulp.task('clean.e2e', function(done) {
  del(['dist-e2e'], done);
});

gulp.task('clean.dist', function(done) {
  del(['dist'], done);
});

gulp.task('clean', function(done) {
  del(['dist', 'dist-test', 'dist-e2e'], done);
});

// requires build-systemjs-bundle to be run once
gulp.task('karma', ['build-karma-tests'], function(done) {
  var karma = require('karma').server;
  karma.start({
    configFile: __dirname + '/scripts/karma/karma.conf.js'
  }, function(result) {
    if (result > 0) {
      return done(new Error('Karma exited with an error'));
    }
    done();
  });
});

gulp.task('karma-watch', ['watch.karma.tests', 'build-systemjs-bundle'], function() {
  watchTask('build-systemjs-bundle');
  var karma = require('karma').server;
  return karma.start({ configFile: __dirname + '/scripts/karma/karma-watch.conf.js'})
});


/**
 * Validate Task
 * - This task
 */
gulp.task('validate', function(done) {
  runSequence(
    'lint.scss',
    'tslint',
    'build.karma',
    'karma',
    done
  );
});



/**
 * TS LINT
 */
gulp.task('tslint', function() {
  var tslint = require('gulp-tslint');
  return gulp.src([
      'src/**/*.ts',
      '!src/**/test/**/*',
    ]).pipe(tslint())
      .pipe(tslint.report('verbose'));
});
