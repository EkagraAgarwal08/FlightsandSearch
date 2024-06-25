const express = require("express");
const bodyparser = require('body-parser');

const { port } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository')

const setupAndStartServer = async () => {
    // create an express object
    const app = express();

    // Middleware setup
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));

    // Start the server
    app.listen(port, () => {
        console.log(`Server started at port ${port}`);
        const repo = new CityRepository();
        repo.CreateCity({name:"UP"});
    });
};

setupAndStartServer();
