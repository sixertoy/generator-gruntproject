/**
 * <%= project.name %>
 * <%= project.repository %>
 *
 * Copyright (c) <%= project.year %> <%= author.name %>
 * Licensed under the MIT license.
 *
 */
/*jslint plusplus: true, indent: 4 */
/*global module, require */
module.exports = function (grunt) {
    'use strict';
    // load configs
    require('load-grunt-config')(grunt);
    /*
     *
     * grunt banner
     * {data: { banner: grunt.file.read('./grunt/banner.tpl', 'utf-8')}}
     *
     */
};
