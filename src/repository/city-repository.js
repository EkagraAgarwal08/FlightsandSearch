const {City} = require('../models/index');


class CityRepository {
    async CreateCity({ name }) { 
        try {
            const city = await City.create({
                name // it means name:name first name means the column in the database 2nd name means the value
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async DeleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async GetCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async UpdateCity(cityId,data){
        try {
            const city = await City.update(data,{
                where:{
                    id:cityId
                }
            })
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports = CityRepository;