const express = require("express");
const bodyparser = require('body-parser');

const { port } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
// const { createCities } = require('./sample');
// const db = require('./models/index');
// const {City,Airport} = require('./models/index');

const setupAndStartServer = async () => {
    // create an express object
    const app = express();

    // Middleware setup
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use('/api',ApiRoutes);

    // Start the server
    app.listen(port, async () => {
        // db.sequelize.sync({alter:true});
        console.log(`Server started at port ${port}`);
        // // const city = await City.findOne({
        // //     where:{
        // //         id:11
        // //     }
        // // });
        // // const airport = await city.createAirport({
        // //     name: 'hauz khas international airport',
        // //     address: '123 Airport St',
        // //     cityId: city.id
        // //   });
        // const airports = await city.getAirports();
        // console.log(city,airports);


        // const cities = [
        //     { name: 'New York' },
        //     { name: 'Los Angeles' },
        //     { name: 'Chicago' },
        //     { name: 'Houston' },
        //     { name: 'Phoenix' }
        // ];

        // try {
        //     const result = await createCities(cities);
        //     console.log('Cities creation result:', result);
        // } catch (error) {
        //     console.error('Error creating cities:', error);
        // }

        
    });
};

setupAndStartServer();
