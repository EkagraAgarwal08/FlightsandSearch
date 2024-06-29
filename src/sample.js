const { City } = require('./models/index');

async function createCities(cities) {
  try {
    // Use bulkCreate to insert multiple records
    const createdCities = await City.bulkCreate(cities);

    console.log('Cities have been created:', createdCities);
  } catch (error) {
    console.error('Error creating cities:', error);
  }
}

// Call the function to create cities
module.exports = {createCities};
