let start = async (port, filePath) => {
    const express = require('express');
    const app = express();

    app.get('/', function(req, res) {
        console.log(req.ip + " is downloading file");
        res.download(filePath);
    })

    console.log("server is serving: " + filePath);
    app.listen(port);
};

module.exports = start;