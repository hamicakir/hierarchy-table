module.exports = {
  parser: 'babel-eslint', // define babel as the parser
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:flowtype/recommended', 'prettier'],
  plugins: ['react', 'flowtype', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2018, // understands let, const and other features
    sourceType: 'module', // understands the use of import and export
    ecmaFeatures: {
      jsx: true, // understands the use of tags inside js files
    },
  },
  env: {
    browser: true, // add browser globals variables like document and window
    es6: true, // add globals like Set
    jest: true,
  },
  rules: {
    "react/prop-types": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
}
