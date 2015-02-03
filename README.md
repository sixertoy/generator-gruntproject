# Grunt Project Generator [![Built with Grunt][grunt-img]](http://gruntjs.com/)

[![MIT License][license-img]][license-url]

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

* .editorconfig
* .gitattributes
* [.gitignore](https://gist.github.com/e549b0f03494158987ef.git)
* .jshintrc
* .travis.yml (optional)
* Gruntfile.js
* package.json
* README.md
* CHANGELOG.md
* jasmine-node
* docs:
    * src
    * html
    * page.tpl
* grunt:
    * banner.tpl
    * aliases.yml (grunt tasks alias)
    * bump.js
    * jasmine_node.js
    * jshint.js
    * markdown.js
* tests:
    * spec.tpl

[grunt-img]: https://cdn.gruntjs.com/builtwith.png

[screenshot]: https://github.com/sixertoy/generator-gruntproject/master/screenshot.jpg

[license-img]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE-MIT
