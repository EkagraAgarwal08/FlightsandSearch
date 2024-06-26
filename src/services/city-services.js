// services/city-services.js
const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }
     
    async CreateCity(data) {
        try {
            // console.log(data)
            const city = await this.cityRepository.CreateCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async DeleteCity(cityId) {
        try {
            const response = await this.cityRepository.DeleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async UpdateCity(cityId, data) {
        try {
            const city = await this.cityRepository.UpdateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async GetCity(cityId) {
        try {
            const city = await this.cityRepository.GetCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = CityService;
