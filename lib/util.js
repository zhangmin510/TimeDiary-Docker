'use strict'
var consts = require('./consts');


var util = {};

module.exports = util;

function log(str) {
	process.stdout.write(str + '\n');
}


util.log = log;
