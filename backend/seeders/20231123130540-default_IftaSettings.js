'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('IftaSettings', [{
      id: '1',
      jurisdiction: '',
      iftaIdNumber: '',
      signingAuthority: '',
      title: ''
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('IftaSettings', null, {});
  }
};
