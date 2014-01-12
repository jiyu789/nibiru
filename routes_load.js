/**
 * Created by Administrator on 14-1-12.
 */
fs = require('fs')
module.exports = function(app) {
    eval(fs.readFileSync("./routes.js", "utf-8"));
}