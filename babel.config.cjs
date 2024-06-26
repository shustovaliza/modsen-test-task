module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-flow',
    '@babel/preset-typescript',
  ],
  plugins: ['babel-plugin-transform-import-meta'],
};
