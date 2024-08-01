const express = require('express')
const dayjs = require('dayjs')
const cors = require('cors')


class App {

    constructor() {
        dayjs.tz.setDefault('Asia/Seoul')

        this.app = express();
        this.port = process.env.PORT || 4000;
        this.isDisableKeepAlive = false;

    }







}