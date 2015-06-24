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
        AppBones = require('appbones'),
        pkg = require('../../package.json'),
        generators = require('yeoman-generator');

    GruntProjectGenerator = generators.Base.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);

            this.option('debug', {
                desc: 'Use debug',
                defaults: false
            });

        },

        initializing: function () {
            // custom templates delimiter
            this.config.set('rdim', '%>');
            this.config.set('ldim', '<%=');
            this.log(yosay('Hello sir, welcome to the awesome grunt project generator v' + pkg.version));

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
                    default: this.user.git.email() || 'you.contact@mail.com'
                });

                // project name
                prompts.push({
                    type: 'input',
                    name: 'projectdescription',
                    message: 'Project description',
                    default: 'Project generated with Yeoman generator-gruntproject v' + pkg.version
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
                    name: 'deploy_travis',
                    message: 'Would you like to NPM deploy with Travis ?',
                    default: false
                });

                prompts.push({
                    when: function (values) {
                        return values.deploy_travis;
                    },
                    type: 'input',
                    name: 'travis_apikey',
                    message: 'Travis API key ?',
                    validate: function (value) {
                        return lodash.isEmpty(value.trim()) ? 'Enter your Travis api key' : true;
                    },
                    default: 'travis_api_key'
                });

                prompts.push({
                    type: 'confirm',
                    name: 'skip_install',
                    message: 'Skip NPM Modules install?',
                    default: true
                });

                this.prompt(prompts, function (values) {
                    var date = new Date();
                    this.config.set('node', {
                        version: process.versions.node,
                        skipInstall: values.skip_install
                    });
                    this.config.set('author', {
                        name: values.username,
                        email: values.useremail
                    });
                    this.config.set('project', {
                        name: values.projectname,
                        year: date.getFullYear(),
                        repository: values.projectrepository,
                        description: values.projectdescription
                    });
                    this.config.set('travis', {
                        deploy: values.deploy_travis,
                        apikey: values.travis_apikey
                    });
                    done();
                }.bind(this));

            }
        },

        configuring: function () {
            /*
            var $this = this,
                done = this.async();
                */
        },

        writing: function () {
            var $this = this,
                done = this.async(),
                data = this.config.getAll(),
                bones = path.resolve(this.templatePath(), '../bones.yml'),
                appbones = new AppBones(this.templatePath(), this.destinationPath());
            appbones.setDebug(this.options.debug);
            Q.delay((function () {
                appbones.build(bones, data);
            }()), 1500).then((function () {
                done();
            }()));
        },

        install: function () {
            if (!this.config.get('node').skipInstall) {
                this.npmInstall();
            }
        },

        end: function () {

        }

    });

    module.exports = GruntProjectGenerator;

}());
