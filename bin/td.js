#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var cliff = require('cliff');
var package = require('../package.json');
var util = require('../lib/util');
var consts = require('../lib/consts');

program
   .version(package.version)
   .usage('[options] command <file>')
   .option('-h, --help', 'show help')
   .option('-C, --chdir <path>', 'change the working directory')
   .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
   .option('-T, --no-tests', 'ignore test hook')

program
   .command('setup')
   .description('run remote setup commands')
   .action(function() {
		console.log('setup');
   });

program
   .command('exec <cmd>')
   .description('run the given remote command')
   .action(function(cmd) {
	       console.log('exec "%s"', cmd);
   });

program
   .command('teardown <dir> [otherDirs...]')
   .description('run teardown commands')
   .action(function(dir, otherDirs) {
	       console.log('dir "%s"', dir);
        if (otherDirs) {
        otherDirs.forEach(function (oDir) {
	            console.log('dir "%s"', oDir);
        });
        }
   });

program
   .command('*')
   .description('deploy the given env')
   .action(function(env) {
	       console.log('deploying "%s"', env);
   });

program.parse(process.argv);


util.log('program:\n' + cliff.inspect(program));
