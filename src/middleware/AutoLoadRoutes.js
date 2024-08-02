const { readdirSync } = require('fs')
const {
    join,
    extname,
    basename
} = require("path")

module.exports  = function(directory, app) {

    function _setRoute(directory, parent = '') {
        readdirSync(directory, { withFileTypes: true }).forEach(entry => {
            const fullPath = join(directory, entry.name);
            // console.log({ fullPath })
            if(entry.isDirectory()) {
                _setRoute(fullPath, join(parent, entry.name))
            }else if(extname(entry.name) === '.js') {
                const router = require(fullPath)
                const routePath = `/${join(parent, basename(entry.name, '.js'))}`
                const expressRoute= routePath === '/_' ? '/' : routePath.replace('/index', '');
                console.log(`[AutoLoadRoutes] :: ${expressRoute} => ${fullPath}`)
                app.use(expressRoute, router)
            }
        })
    }

    _setRoute(directory)

}

