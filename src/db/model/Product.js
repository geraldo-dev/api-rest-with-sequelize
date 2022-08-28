'user strict'

const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config')

class Product extends Model {}

Product.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.REAL,
        active: DataTypes.BOOLEAN
    },
    {
        sequelize,
        modelName: 'Product',
        timestamps: false
    })

module.exports = Product