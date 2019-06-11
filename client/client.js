let start = async (ip, outPath) => {
    const request = require('request');
    const fs = require ('fs');

    let response = request("http://" + ip + ":8080");
    response.pipe(fs.createWriteStream(outPath));
}