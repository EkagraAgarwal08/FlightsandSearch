'use strict';

const { name } = require('body-parser');

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
    await queryInterface.bulkInsert('Airports',[
      {
        name:'Indira Gandhi International Airport',
        cityId:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Safdarjung Airport',
        cityId:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Chhatrapati Shivaji International Airport',
        cityId:2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Pune International Airport',
        cityId:2,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ])
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
