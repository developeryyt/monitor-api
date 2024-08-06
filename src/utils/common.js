const uuid = require('uuid')
const crypto = require('crypto')

export const getUUID = () => {
    return uuid.v4().toUpperCase()
}

module.exports.md5 = (pw) => {
    pw = (typeof pw === 'string') ? pw: pw.toString()
    return crypto.createHash('md5').update(pw).digest('hex')
}