#!/bin/bash

# Inspired by AngularJS's finalize-version script

# force user to deifne git-push-dryrun so he has to think!
ARG_DEFS=(
  "--git-push-dryrun=(true|false)"
  "--action=(prepare|publish)"
)

function prepare {
  cd ../..

  # Remove suffix
  OLD_VERSION=$(readJsonProp "package.json" "version")
  VERSION=$(echo $OLD_VERSION | sed 's/-.*//')

  replaceJsonProp "package.json" "version" "$VERSION"

  CODENAME=$(readJsonProp "package.json" "codename")

  replaceJsonProp "bower.json" "version" "$VERSION"
  replaceJsonProp "component.json" "version" "$VERSION"

  echo "-- Building and putting files in release folder"
  grunt build
  mkdir -p release
  cp -Rf dist/* release

  git add package.json bower.json component.json release
  git commit -m "chore(release): v$VERSION"
  git tag -m "v$VERSION" v$VERSION

  echo "--"
  echo "-- Version is now $VERSION, codename $CODENAME."
  echo "-- Release commit & tag created."
  echo "-- When ready to push, run ./scripts/finalize-version.sh --action=publish"
  echo "--"
}

function publish {
  cd ../..

  VERSION=$(readJsonProp "package.json" "version")

  git push -q origin master
  git push -q origin v$VERSION

  echo "-- Version published as v$VERSION successfully!"

  cd $SCRIPT_DIR
}

source $(dirname $0)/../utils.inc
