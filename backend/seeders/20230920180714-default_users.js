'use strict';

const { generatePassword } = require('../services/crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await generatePassword("Admin@123");
    return queryInterface.bulkInsert('Users', [{
      username: 'admin',
      firstName: 'Admin',
      lastName: 'OnPayload',
      emailAddress: 'admin@onpayload.com',
      password,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
