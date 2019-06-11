let start = async (filePath) => {
    const express = require('express');
    const app = express();

    app.get('/', function(req, res) {
        res.sendFile(this.filePath);
    })
};