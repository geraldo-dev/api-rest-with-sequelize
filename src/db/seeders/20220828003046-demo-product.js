'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
    {
      name: 'azzor',
      description: 'alimento para refeições diarias'
    },
    {
      name: 'feijão',
      description: 'alimento que acompanha os protos principais'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
