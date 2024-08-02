const { verify } = require('../utils/tokenUtil');



const authJwt = (req, res, next) => {
    const token = req.header('boa-authorization')?.split('Bearer ')[1];

    if(!token) {
        return res.status(401).json({ message: '토큰이 제공되지 않았습니다. '})
    }

    try {
        req.user = verify(token)
        if(!req.user?.['ok']) return res.status(401).json({ message: '유효하지 않은 토큰입니다.' })
        next()
    }catch (err) {
        return res.status(401).json({ message: '유효하지 않은 토큰입니다. '})
    }

}



module.exports = authJwt;