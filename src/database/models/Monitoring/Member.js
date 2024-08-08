// const {getUUID} = require("../../../utils/common");
//
//
//
// module.exports = function(sequelize, DataTypes) {
//     const Member = sequelize.define('Member', {
//         userIdx: {
//             field: 'user_key',
//             type: DataTypes.STRING(128),
//             allowNull: false,
//             primaryKey: true,
//             defaultValue: () => getUUID()
//         },
//         userId: {
//             type: DataTypes.STRING(128),
//             allowNull: false,
//             unique: true,
//         },
//         userName: {
//             type: DataTypes.STRING(128),
//             allowNull: true,
//         },
//         userPw: {
//             type: DataTypes.STRING(128),
//             allowNull: false,
//         }
//     })
//
//
//     return Member;
// }