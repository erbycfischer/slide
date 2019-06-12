const cli = require('command-line-args');

const optionDefinitions = [
    { name: 'send', alias: 's', type: Boolean },
    { name: 'receive', alias: 'r', type: Boolean },
    { name: 'file', alias: 'f', type: String },
    { name: 'output', alias: 'o', type: String },
    { name: 'address', alies: 'ip', type: String}
];

const options = cli(optionDefinitions);

const PORT = 8080;

if (options.send) {
    const fileToSend = options.file;

    const server = require('server/server.js');
    await server.start(PORT, fileToSend);

} else if (options.receive) {
    const outputPath = options.output;
    const ip = options.address;

    const client = require('client/client.js');
    await client.start(ip, PORT, outputPath);
}