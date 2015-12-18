var program = require('commander');

program
	.option('-s, --list', 'list details')
	.parse(process.argv);

if (!!program.list) {
	console.log('list details');
}

