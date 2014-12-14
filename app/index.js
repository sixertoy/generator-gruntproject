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
/*global require, process, module */
(function () {

    'use strict';

    var GruntProjectGenerator,
        Q = require('q'),
        path = require('path'),
        yosay = require('yosay'),
        lodash = require('lodash'),
        slugify = require('slugify'),
        appbones = require('appbones'),
        generators = require('yeoman-generator');

    GruntProjectGenerator = generators.Base.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);
            this.log(yosay('Hello sir, welcome to the awesome grunt project generator!'));
        },

        initializing: function () {
            // custom templates delimiter
            this.config.set('rdim', '%>');
            this.config.set('ldim', '<%=');
        },

        prompting: {
            askForIdentity: function () {

                var $this = this,
                    prompts = [],
                    done = this.async();

                // project name
                prompts.push({
                    type: 'input',
                    name: 'projectname',
                    message: 'Project name',
                    default: slugify(this.determineAppname())
                });

                prompts.push({
                    type: 'input',
                    name: 'username',
                    message: 'Repository user name',
                    default: this.user.git.name() || process.env.user || process.env.username
                });

                prompts.push({
                    type: 'input',
                    name: 'useremail',
                    message: 'Repository user email',
                    default: this.user.git.email() || 'you@mail.com'
                });

                // project name
                prompts.push({
                    type: 'input',
                    name: 'projectdescription',
                    message: 'Project description',
                    default: 'Place your project\'s description here'
                });

                prompts.push({
                    type: 'input',
                    name: 'projectrepository',
                    message: 'Project repository url',
                    default: function (values) {
                        return 'https://github.com' + '/' + values.username + '/' + values.projectname;
                    }
                });

                prompts.push({
                    type: 'confirm',
                    name: 'use_travis',
                    message: 'Would you like to use Travis ?',
                    default: false
                });

                prompts.push({
                    when: function (values) {
                        return values.use_travis;
                    },
                    type: 'input',
                    name: 'travis_apikey',
                    message: 'Travis API key ?',
                    validate: function (value) {
                        return lodash.isEmpty(value.trim()) ? 'Enter your Travis api key' : true;
                    }
                });

                this.prompt(prompts, function (values) {
                    this.config.set('author', {
                        name: values.username,
                        email: values.useremail
                    });
                    this.config.set('project', {
                        name: values.projectname,
                        repository: values.projectrepository,
                        description: values.projectdescription
                    });
                    if (values.use_travis) {
                        this.config.set('travis', {
                            apikey: values.travis_apikey
                        });
                    }
                    this.config.set('conditionnals', {
                        travis: values.use_travis
                    });
                    done();
                }.bind(this));

            }
        },

        configuring: {

        },

        writing: function () {

            var $this = this,
                done = this.async(),
                data = this.config.getAll(),
                bones = path.resolve(this.templatePath(), '../bones.yml');
            appbones.sourcePath(this.templatePath());
            appbones.destinationPath(this.destinationPath());
            Q.delay((function (){
                appbones(bones, data);
            }()), 1500).then((function(){
                done();
            }()));
        },

        install: function () {
            this.npmInstall();
        },

        end: function () {

        }

    });

    module.exports = GruntProjectGenerator;

}());
