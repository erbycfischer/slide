let start = async (port, filePath) => {
    const express = require('express');
    const app = express();

    app.get('/', function(req, res) {
        res.sendFile(this.filePath);
    })

    app.listen(port);
};

modules.exports = start;