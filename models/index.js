const dbconfig = require('../config/dbconfig');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORED, {
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        operatorAliases: false
    }
)

sequelize.authenticate()
.then(() => {
    console.log("Database connected");
})
.catch(err => {
    console.log("Error to conect to database");
})

const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.chats = require('./chatModel.js')(Sequelize, DataTypes)

db.sequelize.sync({ force: false})
.then(() =>{
    console.log("yes re-sync done!");
})

module.exports = db