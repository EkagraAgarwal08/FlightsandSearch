const express = require("express");
const { port } = require('./config/serverConfig');

const setupAndStartServer = async () => {
    // create an express object
    const app = express();
    app.listen(port, () => {
        console.log(`Server started at port ${port}`);
    });
};

setupAndStartServer();
