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
                    host: process.env["DATABASE_DEFAULT_SLAVE.HOST"],
                    username: process.env["DATABASE_DEFAULT_SLAVE_USER"],
                    password: process.env["DATABASE_DEFAULT_SLAVE_PASSWORD"]
                }
            ],
            write: {
                host: process.env["DATABASE_DEFAULT_MASTER_HOST"],
                username: process.env["DATABASE_DEFAULT_MASTER_USER"],
                password: process.env["DATABASE_DEFAULT_MASTER_PASSWORD"]
            }
        }
    }
}