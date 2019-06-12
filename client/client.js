let start = async (ip, port, outPath) => {
    const request = require('request');
    const fs = require ('fs');

    let response = request("http://" + ip + ":" + port);
    response.pipe(fs.createWriteStream(outPath));
}