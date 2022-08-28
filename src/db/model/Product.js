'user strict'

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config')

class Product extends Model {}

Product.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'Product',
        timestamps: false
    })

module.exports = Product