'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
    {
      name: 'azzor',
      description: 'alimento para refeições diarias',
      price: 12.00
    },
    {
      name: 'feijão',
      description: 'alimento que acompanha os protos principais',
      price: 12.00
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
