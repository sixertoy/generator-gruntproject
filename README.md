# Grunt Project Generator [![Built with Grunt][grunt-img]](http://gruntjs.com/)

[![MIT License][license-img]][license-url] [![NPM version][npm-version-img]][npm-url] [![NPM downloads][npm-downloads-img]][npm-url]

> Yeoman generator for a Grunt ready project

## Install

```bash
npm install -g generator-gruntproject
```

## Usage

```bash
cd myproject
yo gruntproject
```

## Prompts

* Project name (current folder name)
* Repository user name (current git username)
* Repository user email (current git user email)
* Project description (Place your project's description here)
* Project repository url (https://github.com/user/projectname)
* Use Travis ? (N)
    * Travis API key

### Grunt's packages

* [**grunt bump**](https://www.npmjs.com/package/grunt-bump)
* [**grunt jasmine-node**](https://github.com/sixertoy/grunt-jasmine-node)
* [**grunt jshint**](https://www.npmjs.com/package/grunt-contrib-jshint)
* [**grunt markdown**](https://www.npmjs.com/package/grunt-markdown)
* [**load-grunt-config**](https://www.npmjs.com/package/load-grunt-config)

### Folders & Files generated

![Screenshot](./screenshot.jpg)

[grunt-img]: https://cdn.gruntjs.com/builtwith.png

[license-img]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE-MIT

[npm-url]: https://npmjs.org/package/generator-gruntproject
[npm-version-img]: http://img.shields.io/npm/v/generator-gruntproject.svg?style=flat-square
[npm-downloads-img]: http://img.shields.io/npm/dm/generator-gruntproject.svg?style=flat-square
