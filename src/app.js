const express = require('express');
const http = require('http');
const dayjs = require('dayjs');
const timezone = require('dayjs/plugin/timezone');
const utc = require('dayjs/plugin/utc');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const autoRoutees = require('./middleware/AutoLoadRoutes')
const ipChecker = require('./middleware/IpChecker')
const path = require('path')




class App {

    constructor() {
        dayjs.extend(utc);
        dayjs.extend(timezone);
        dayjs.tz.setDefault('Asia/Seoul');

        this.app = express();
        this.port = process.env.PORT || 4000;
        this.isDisableKeepAlive = false;

        this.initMiddleWares()
        this.initControllers()
    }

    initMiddleWares() {
        this.app.set('trust proxy', true)
        this.app.use(cors())
        this.app.use(ipChecker)
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(cookieParser())
        autoRoutees(path.join(__dirname, 'routes'), this.app)
    }

    initControllers() {

        this.app.use((req, res, next) => {
            if(this.isDisableKeepAlive) res.set('Connection', 'close')
            next()
        })

        this.app.get('/favicon.ico', (req, res) => {
            res.status(204)
        })

        this.app.get('/ht', (req, res) => {
            res.status(200).send('ok')
        })
    }

     listen() {
        const server = http.createServer(this.app)

        server.listen(this.port, async () => {
            try {
                process.send('ready')
            }catch (e) {
                console.error('not pm2 cluster')
            }

            console.info(`[NODEJS] [${process.env.NODE_ENV}] http App listening on the port ${this.port}`)
        })

        process.on('SIGINT', () => {
            this.isDisableKeepAlive = true;
            server.close(() => {
                process.exit(0)
            })
        })

    }


}

let app= new App()

app.listen()
