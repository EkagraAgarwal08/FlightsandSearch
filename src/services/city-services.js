// services/city-services.js
const { CityRespository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRespository = new CityRespository();
    }
     
    async CreateCity(data) {
        try {
            // console.log(data)
            const city = await this.cityRespository.CreateCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async DeleteCity(cityId) {
        try {
            const response = await this.cityRespository.DeleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async UpdateCity(cityId, data) {
        try {
            const city = await this.cityRespository.UpdateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async GetCity(cityId) {
        try {
            const city = await this.cityRespository.GetCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async getAllCities(filter) {
        try {
            const cities = await this.cityRespository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
  
}

module.exports = CityService;
