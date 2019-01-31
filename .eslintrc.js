const config = {
  env: {
      browser: true,
      es6: true,
      node: true,
  },
  parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module',
      allowImportExportEverywhere: true,
  },
  "extends": [
    "airbnb-base",
    "eslint:recommended", 
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
  "rules": {
    
  }
};

module.exports = config;