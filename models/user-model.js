var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
});

UserSchema.methods.validPassword = function(password){
    console.log("this password"+this.password);
    console.log(" password"+password);
    return this.password == password;
}

var UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;