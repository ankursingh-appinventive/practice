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

// const { Sequelize, DataTypes, sequelize } = require('./index');
// const { Sequelize, DataTypes, sequelize } = require('sequelize');

module.exports = (Sequelize, DataTypes) =>{

    const Chat = sequelize.define("chats", {
        messageID: {
            type: DataTypes.STRING,
            allowNull: false,
            // primaryKey: true
        },
        person1: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        person2: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        text: {
            type: DataTypes.STRING,
            // 
        }
    })
    return Chat
}