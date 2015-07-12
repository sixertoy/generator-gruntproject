# <%= project.name %> [![Built with Grunt][grunt-img]](http://gruntjs.com/)

[![MIT License][license-img]][license-url] [![NPM version][npm-version-img]][npm-url] [![NPM downloads][npm-downloads-img]][npm-url] <% if(travis.deploy) { %>[![Build][travis-img]][travis-url] [![Coverage Status][coverall-img]][coverall-url]<% } %>

* <%= project.description %>

## Install

## Usage

## Options

## Issues

## History

[grunt-img]: https://cdn.gruntjs.com/builtwith.png
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE-MIT

[coverall-url]: https://coveralls.io/r/<%= author.name %>/<%= project.name %>
[coverall-img]: https://img.shields.io/coveralls/<%= author.name %>/<%= project.name %>.svg?style=flat-square

[travis-url]: https://travis-ci.org/<%= author.name %>/<%= project.name %>
[travis-img]: http://img.shields.io/travis/<%= author.name %>/<%= project.name %>.svg?style=flat-square

[npm-url]: https://npmjs.org/package/generator-gruntproject
[npm-version-img]: http://img.shields.io/npm/v/<%= project.name %>.svg?style=flat-square
[npm-downloads-img]: http://img.shields.io/npm/dm/<%= project.name %>.svg?style=flat-square
