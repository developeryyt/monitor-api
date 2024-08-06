const jwt = require('jsonwebtoken')

class TokenGen {

    #accessT = null;
    #refreshT = null;

    constructor() {
    }

    get token() {
        return this.#accessT
    }

    get refreshToken() {
        return this.#refreshT
    }

    genAccessToken(data) {
        this.#accessT = jwt.sign({
                userId: data['userId']
            },
            process.env.ACCESS_TOKEN_ALGORITHM,
            {
                algorithm: process.env.ACCESS_TOKEN_ALGORITHM,
                expiresIn: `${process.env.ACCESS_TOKEN_EXPIRE}${process.env.ACCESS_TOKEN_TIME_OPT}`
            }
        )
    }

    genRefreshToken(data) {
        this.#refreshT = jwt.sign({
            userId: data['userId']
        }, process.env.REFRESH_TOKEN_SECRET_KEY, {
            algorithm: process.env.REFRESH_TOKEN_ALGORITHM,
            expiresIn: `${process.env.REFRESH_TOKEN_EXPIRE}${process.env.REFRESH_TOKEN_TIME_OPT}`
        })
    }

}


const authMiddleWare = async (req, res, next) => {
    try {
        const accessToken = req.headers['boa-authorization'] && req.headers['boa-authorization'].split(" ")[1]
        console.log(accessToken)

    }catch (err) {

    }
}

const reAuthMiddleWare = async (req, res, next) => {
    try {


    }catch (err) {

    }
}


module.exports.authMiddleWare = authMiddleWare;
module.exports.reAuthMiddleWare = reAuthMiddleWare;
