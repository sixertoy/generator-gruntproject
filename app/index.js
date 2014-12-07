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
        chalk = require('chalk'),
        yosay = require('yosay'),
        yaml = require('js-yaml'),
        assert = require('assert'),
        lodash = require('lodash'),
        generators = require('yeoman-generator');

    GruntProjectGenerator = generators.Base.extend({

        constructor: function () {
            generators.Base.apply(this, arguments);
            this.log(yosay('Hello sir, welcome to the awesome grunt project generator!'));
        },

        initializing: function () {

            // place here private methods
            this.parseBones = function (name, values) {
                var p, $this = this;
                if (!lodash.isNull(values)) {
                    values.filter(function (value) {
                        if (lodash.isString(value)) {
                            return true;
                        } else if (lodash.isArray(value)) {
                            value.map(function (file) {
                                p = path.join(name, file);
                                if (file.indexOf('_') === 0) {
                                    $this.fs.copyTpl(
                                        $this.templatePath(p),
                                        $this.destinationPath(path.join(name, file.slice(1))),
                                        $this.config.getAll()
                                    );
                                } else {
                                    $this.fs.copy(
                                        $this.templatePath(p),
                                        $this.destinationPath(p)
                                    );
                                }
                            });
                            return false;
                        } else if (lodash.isObject(value)) {
                            Object.keys(value).map(function (key) {
                                p = path.join(name, key);
                                $this.mkdir(p);
                                $this.parseBones(p, value[key]);
                            });
                        }
                    }).map(function (item) {
                        $this.mkdir(path.join(name, item));
                    });
                }
                return true;
            };
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
                    default: this.determineAppname()
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
                    message: 'Project repository',
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
                        return lodash.isEmpty(value.trim()) ? 'Enter your Travis api key': true;
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
                    done();
                }.bind(this));

            }
        },

        configuring: {

        },

        writing: function () {
            var $this = this,
                done = this.async(),
                file = '../bones.yml',
                bones = yaml.safeLoad(this.src.read(file, 'utf-8'));
            Q.delay(500, (function () {
                // $this.parseBones('', bones['root']);
            }())).then(done);
        },

        install: function () {

        },

        end: function () {

        }

    });

    module.exports = GruntProjectGenerator;

}());
