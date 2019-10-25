# GDQ's stylelint-config [![npm](https://img.shields.io/npm/v/@gamesdonequick/stylelint-config.svg)](https://www.npmjs.com/package/@gamesdonequick/stylelint-config) [![Build Status](https://dev.azure.com/gamesdonequick/stylelint-config/_apis/build/status/GamesDoneQuick.stylelint-config?branchName=master)](https://dev.azure.com/gamesdonequick/stylelint-config/_build/latest?definitionId=6&branchName=master)

> Our re-usable config for the Stylelint CSS linter.

## Usage

1. Install this config as a devDependency:

   ```bash
   npm i -D @gamesdonequick/stylelint-config
   ```

2. Follow the instructions here to use or extend our config: https://stylelint.io/user-guide/configuration#extends

3. This package actually includes multiple configs. One base config, and one that has some rules specific to PostCSS. You can pick and choose what parts you wish to use. To use both, your config might look like this:

   ```js
   module.exports = {
     extends: ['@gamesdonequick/stylelint-config', './node_modules/@gamesdonequick/stylelint-config/postcss'],
   };
   ```
