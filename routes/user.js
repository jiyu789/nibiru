
/*
 * GET home page.
 */
var db = require("mongoose")
exports.index = function(req, res){
  console.log("user index")
  var User = db.model("User")
     User.find({}, function(err, data){
        console.log(data)
        res.render('user/index', { users:data});
  })

};
exports.new = function(req, res) {
    console.log('user new');
    res.render('user/new');
}
exports.create = function(req, res) {
    var name = req.params.name;
    var pwd = req.params.pwd;
    var User = db.model('User')
    var newUser = new User({
        username:name,
        pwd:pwd
    })
    newUser.save
    console.log('create name:', name, "pwd=", pwd);
    res.redirect("/user");
}