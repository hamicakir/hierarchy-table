module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
    'flow'
  ],
  plugin: [
    '@babel/plugin-syntax-dynamic-import',
  ],
};
