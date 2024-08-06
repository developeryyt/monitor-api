const { Member } = require('../models')
const { md5 } = require('../../utils/common')
const { Op } = require('sequelize')


module.exports.setMember = async (params) => {
    return await Member.create(params).catch((e) => {
        throw new Error(e.message)
    })
}

module.exports.getMember = async (userId, userPw) => {
    const findOption = {
        where: {
            userId: { [Op.eq]: userId },
            mbPw: { [Op.eq]: md5(userPw) },
        }
    }

    return await Member.findOne(findOption).catch((e) => {
        throw new Error(e.message)
    })
}