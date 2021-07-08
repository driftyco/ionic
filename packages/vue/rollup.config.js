const external = ['vue', 'vue-router'];

export default {
  input: 'dist-transpiled/index.js',
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true
    }
  ],
  external: id => external.includes(id) || id.startsWith('@ionic/core') || id.startsWith('ionicons')
};
