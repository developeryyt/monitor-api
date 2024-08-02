const express = require('express');
const createError = require("http-errors");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // next(createError(404));
    res.status(200).send('ok')
});

module.exports = router;
