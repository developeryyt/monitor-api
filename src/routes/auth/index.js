const express = require("express");
const router = express.Router();
const authJWT = require('../../middleware/AuthJWT')


// router.post("/shop", async (req, res, next) => {
//     const mb_id = req.body?.mb_id;
//     const mb_pw = req.body?.mb_pw;
//     // if (!mb_id || !mb_pw) return next(createError(400, "mb_id or mb_pw is not exist"));
//     let response = {};
//     // try {
//     //     const _jwtToken = await Shop.findOne({ where: {mb_id, mb_pw} });
//     //     response["token"] = sign(_jwtToken);
//     // } catch (e) {
//     //     return next(createError(500, e.message));
//     // }
//     res.json(response);
// });

router.get('/login',(req, res) => {
    const params = req.body;

    console.log(params)

})

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
