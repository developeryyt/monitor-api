module.exports = (req, res, next) => {

    let ip = req.ip;

    if(ip.startsWith('::ffff::')) {
        ip = ip.substring(7)
    }

    req.ip = ip;
    next()
}