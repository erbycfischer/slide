const cli = require('command-line-args');

const optionDefinitions = [
    { name: 'send', alias: 's', type: Boolean },
    { name: 'receive', alias: 'r', type: Boolean },
    { name: 'file', alias: 'f', type: String },
    { name: 'output', alias: 'o', type: String }
];

const options = cli(optionDefinitions);

if (options.name == 'send') {
    const fileToSend = options.file;

    const server = require('server/server.js');
} else if (options.receive) {
    const outputPath = options.output;

    const client = require('client/client.js');
}