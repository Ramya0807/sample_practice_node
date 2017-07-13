var passport = require('passport');
var passportStrategy = require('passport-local').Strategy;

var UserModel  = require('../models/user-model');

passport.use('local-signup',new passportStrategy({passReqToCallback:true},function(req,username,password,done){

UserModel.findOne({username}).then(function(user) {
    if(user){
        return done(null,false);
    }else{
        var newUser = new UserModel();
        newUser.username = username;
        newUser.password = password;
        newUser.save().then(function(result){
            console.log("new user created");
            return done(null, newUser);
        }).catch(function(err){
          console.log("unable to create new user");  
        })

    }

}).catch(function(err){
   console.log('error occured'); 
   return done(err);
})
   
}))

passport.use('local-login',new passportStrategy({passReqToCallback : true}, function(req, username, password, done){
    console.log("check the login value"+username);
UserModel.findOne({ username }).then(function(user) {
        if (!user){
        console.log('No User Found');
            return done(null, false);
        }
        if (!user.validPassword(password)) {
            console.log('Ooops! Wrong Password for the user');
            return done(null, false);
        }
        return done(null, user);
}).catch(function(err){
    console.log('error has occured in login');

})
}))

passport.serializeUser(function(user,done){
    console.log("user id "+user.id);
    done (null,user.id);
})

passport.deserializeUser(function(id, done){
    UserModel.findById(id,function(err,user){
        if(err) throw err;
        done(null,user);
    })
})

module.exports = passport;