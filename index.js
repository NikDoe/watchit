#!/usr/bin/env node

const chokidar = require('chokidar');
const debounce = require('lodash.debounce');

const start = debounce(() => {
	console.log('USER PROGRAM STARTED');
}, 100);

chokidar
	.watch('.')
	.on('add', start)
	.on('change', () => console.log('file changed'))
	.on('unlink', () => console.log('file remove'));
