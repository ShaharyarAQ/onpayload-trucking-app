'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BusinessDetails', [{
      id: '1',
      businessName: '',
      ein: '',
      address: '',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BusinessDetails', null, {});
  }
};
