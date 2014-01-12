/**
 * Created by Administrator on 14-1-12.
 */
fs = require("fs")
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = mongoose.ObjectId
//加载model
loadModel = function(file) {
    var data = fs.readFileSync(file, 'utf-8')
//    console.log(data)
    eval(data)
}
//定义module扫描方法
module.exports = function() {
    var files = fs.readdirSync('./models')
    console.log(files)
    files.forEach(function(file){
        loadModel("./models/"+file)
    })
}