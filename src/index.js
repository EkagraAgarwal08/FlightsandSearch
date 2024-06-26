const express = require("express");
const bodyparser = require('body-parser');

const { port } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');


const setupAndStartServer = async () => {
    // create an express object
    const app = express();

    // Middleware setup
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use('/api',ApiRoutes);

    // Start the server
    app.listen(port, () => {
        console.log(`Server started at port ${port}`);
    });
};

setupAndStartServer();
