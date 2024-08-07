// this file is created because suppose we have 10 types of repository in the folder so when we require all the repositories in the service layer then we should manually write all the require file one by one so a object is created which will contain all the file and this file will be exported.

const AirportRespository = require('./airport-repository');
const CrudRespository = require('./crud-repository');

module.exports = {
    CityRespository : require('./city-repository'),
    FlightRespository:require('./flight-repository'),
    AirplaneRespository:require('./airplane-repository'),
    AirportRespository:require('./airport-repository'),
    CrudRespository:require('./crud-repository')      
}