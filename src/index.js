const express = require('express')
const sequelize = require("./config");
const cors = require("cors")
const app = express()

sequelize.sync().then(() => console.log("database connected successfully 🏦"));

app.use(express.json())
app.use(cors())

app.listen(3000, ()=> console.log('http://localhost:3000/ 🔥'))