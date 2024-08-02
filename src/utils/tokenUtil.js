const jwt = require('jsonwebtoken')
const secret = process.env.SECRET;



module.exports = {
    sign: (payload, expire = '15d') => {
        const { userId, userPw } = payload;

        return jwt.sign(userId, secret, {
            algorithm: 'HS256',
            expiresIn: expire,
            allowInsecureKeySizes: true
        })

    },
    verify: (token) => {
        let decoded = null;

        try {
            decoded = jwt.verify(token, secret, { algorithms: ['HS256'] })
            return {
                ok: true,
                decoded,
            }
        } catch(err) {
            return {
                ok: false,
                message: err.message
            }
        }

    },
    refresh: (payload, expire = '30d') => {
        return jwt.sign(payload, secret, {
            algorithm: 'HS256',
            expiresIn: expire
        })
    },
    refreshVerify: async (token, userId) => {

        // const getAsync = promisfy()

        try {


        }catch(err) {
            return false;
        }
    }
}