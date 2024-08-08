const express = require("express");
const router = express.Router();
const createError = require('http-errors');
const authJWT = require('../../middleware/AuthJWT')
const {authMiddleWare} = require("../../middleware/AuthMiddleWare");
const {getMember} = require("../../database/dao/Member");
const _ = require('lodash')
const {isNull} = require("lodash");

router.post('/login',async (req, res, next) => {
    const params = req.body;
    const { userId, userPw } = params
    let Member = null;


    // if(!userId || !userPw) return next(createError(400, '아이디, 비밀번호를 확인해주시기 바랍니다.'))


    // res.status(401).json({
    //     message: '에러가 발생함'
    // })

    // try {
    //     Member = await getMember(userId, userPw)
    //
    //     if(!_.isEmpty(Member)) {
    //
    //     }else {
    //
    //     }
    //
    // }catch(err) {
    //     return next(createError(500, err.message))
    // }


})


// router.post('/token', authMiddleWare, async (req, res, next) => {
//
//
// })

// router.get("/token", authJWT, async (req, res, next) => {
//     const params = await req.body;
//     const users = await memberService.getOne(params)
//         .catch((e) => {
//             return next(createError(500, e.message));
//         });
//     console.log(users)
//     res.json(users);
// });

module.exports = router;
