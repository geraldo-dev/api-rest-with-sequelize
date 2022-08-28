'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
    {
      name: 'azzor',
      description: 'alimento para refeições diarias',
      price: 12.12,
      active: true
    },
    {
      name: 'feijão',
      description: 'alimento que acompanha os protos principais',
      price: 0.32,
      active: false
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
