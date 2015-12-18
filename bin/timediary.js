#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var package = require('../package.json');
var fs = require('fs');

fs.readdirSync(__dirname + '/cmds').forEach(function(file) {
		if (!/\.js$/.test(file)) {
			return;
		}
		require(__dirname + '/cmds/' + file);
});

program
   .version(package.version)
   .command('list [name]', 'list name')
   .command('new', 'create new')
   .parse(process.argv);
