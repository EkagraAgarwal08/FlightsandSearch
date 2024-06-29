'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Airbus 1',
        capacity:300,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Airbus 2',
        capacity:270,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Airbus 3',
        capacity:180,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Airbus 4',
        capacity:400,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Airbus 5',
        capacity:350,
        createdAt:new Date(),
        updatedAt:new Date()
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
