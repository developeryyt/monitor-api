const uuid = require('uuid')


export const getUUID = () => {
    return uuid.v4().toUpperCase()
}