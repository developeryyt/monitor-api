module.exports = {
    Monitoring: {
        dialect: 'mysql',
        database: process.env[""],
        port: process.env[""],
        timezone: '+09:00',
        pool:{
         max: 20,
         idle: 30000,
        },
        dialectOptions: {
            timezone: '+09:00'
        },
        replication: {
            read: [
                {
                    host: process.env[""],
                    username: process.env[""],
                    password: process.env[""]
                }
            ],
            write: {
                host: process.env[""],
                username: process.env[""],
                password: process.env[""]
            }
        }
    }
}