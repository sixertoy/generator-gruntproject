/**
 * Grunt Project
 * https://github.com/sixertoy/generator-grunt-project
 *
 * Copyright (c) 2014 Matthieu Lassalvy
 * Licensed under the MIT license.
 *
 * Generate folder and files for a grunt project
 * with grunt basic tasks, jasmine unit testing, istanbul coverage and travis deployement
 *
 * @insatll npm install grunt-cli yo bower -g
 * @usage yo grunt-project
 *
 *
 */
(function () {

    var generators = require('yeoman-generator');

    var GruntProjectGenerator = generators.Base.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);
            this.option('name'); // project name
        },

        initializing: function () {
            // place here private methods
        },

        prompting: function(){

        },

        configuring: function(){

        },

        writing: function(){

        },

        install: function(){

        },

        end: function(){

        }

    });

    module.exports = GruntProjectGenerator;

}());
