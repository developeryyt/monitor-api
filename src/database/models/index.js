// const fs = require('fs')
// const path = require('path')
// const Sequelize = require('sequelize')
// const databaseConfig = require(__dirname + '/../config/config.js')
// const databases = {};
//
//
// for(const dbKey in databaseConfig) {
//     console.log(`[Databases] ${dbKey} connecting...`)
//     const config = databaseConfig[dbKey]
//     databases[dbKey] = new Sequelize(config.database, config.username, config.password, config)
// }
//
// const DB = {};
//
// for(const dbKey in databases) {
//     const sequelize = databases[dbKey]
//
//     DB[dbKey] = {}
//
//     const modelPath = path.join(__dirname, dbKey);
//
//     fs
//         .readdirSync(modelPath)
//         .filter(file => file.indexOf('.') !== 0 && file !== 'index.js' && file.slice(-3) === '.js')
//         .forEach(file => {
//             const model = require(path.join(modelPath, file))(sequelize, Sequelize.DataTypes)
//             DB[dbKey][model.name] = model;
//         })
//
//     Object.keys(DB[dbKey]).forEach(modelName => {
//         if(DB[dbKey][modelName].associate) {
//             DB[dbKey][modelName].associate(DB[dbKey])
//         }
//     })
//
// }
//
//
// for(const dbKey in databases) {
//     DB[dbKey].sequelize = databases[dbKey]
//     DB[dbKey].Sequelize = Sequelize
// }
//
// module.exports = DB;
//
//
//
//
