const express = require("express");
const bodyparser = require('body-parser');


const { port } = require('./config/serverConfig');

const setupAndStartServer = async () => {

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    // create an express object
    const app = express();
    app.listen(port, () => {
        console.log(`Server started at port ${port}`);
    });
};

setupAndStartServer();
