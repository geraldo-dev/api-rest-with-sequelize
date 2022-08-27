const Sequelize = require('sequelize')

const sequelize = new Sequelize('dev', 'root','', {
    dialect: 'sqlite',
    storage: './dev.sqlite'
})

module.exports = sequelize