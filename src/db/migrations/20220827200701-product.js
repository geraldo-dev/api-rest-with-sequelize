'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', 
    { 
      id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: Sequelize.DataTypes.STRING,
      description: Sequelize.DataTypes.STRING,
      price: Sequelize.DataTypes.FLOAT,
      active: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
