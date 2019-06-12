let start = async (port, filePath) => {
    const express = require('express');
    const app = express();

    app.get('/', function(req, res) {
        res.download(filePath);
    })

    app.listen(port);
};

module.exports = start;