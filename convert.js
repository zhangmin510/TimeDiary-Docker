/**
 * Module dependencies.
 */

var EventEmitter = require('events').EventEmitter;
var spawn = require('child_process').spawn;
var path = require('path');
var fs = require('fs');
var dirname = path.dirname;
var basename = path.basename;


convert = {}
module.export = convert;

function log(str) {
	process.stdout.write(str + '\n');
}

convert.log = log;


log('start coverting old diaries');

