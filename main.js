const cli = require('command-line-args');
const find = require('local-devices');
const portscanner = require('portscanner')

const EXIT_SUCCESS = 0;
const EXIT_FAILURE = 1;

const optionDefinitions = [
    { name: 'send', alias: 's', type: Boolean },
    { name: 'receive', alias: 'r', type: Boolean },
    { name: 'file', alias: 'f', type: String },
    { name: 'output', alias: 'o', type: String },
    { name: 'address', alias: 'i', type: String },
    { name: 'port', alias: 'p', type: String },
    { name: 'list', alias: 'l', type: Boolean },
    { name: 'checkhosting', alias: 'h', type: Boolean }
];

const options = cli(optionDefinitions);

if (options.list) {
    find().then(devices => {
        devices.forEach(device => {
            if (options.checkhosting) {
                portscanner.checkPortStatus(9020, device.ip).then(status => {
                    if (status.toLocaleLowerCase() == 'open' || status.toLocaleLowerCase() == 'closed') {
                        console.log("!!Device is hosting file with Slide!!")
                        printDevice(device);
                    }
                });
            } else {
                printDevice(device);
            }
        });
    }).finally(() => process.exit(EXIT_SUCCESS));
}

function printDevice(device) {
    console.log("name: " + device.name);
    console.log("ip: " + device.ip);
    console.log("mac: " + device.mac);
    console.log("");
}

const PORT = parseInt(options.port);

if (options.send) {
    const fileToSend = options.file;

    const server = require('./server/server');
    server(PORT, String(fileToSend));

} else if (options.receive) {
    const outputPath = options.output;
    const ip = options.address;

    const client = require('./client/client');
    client(ip, PORT, outputPath);
} else {
    //process.exit(EXIT_FAILURE);
}