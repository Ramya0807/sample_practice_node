var express = require('express');
var authRouter= express.Router();
var authController = require('../controllers/auth-controller');
var passport = require('../middlewares/passport-auth');

authRouter.get('/signup',authController.showSignupPage);
authRouter.get('/login', authController.showLoginPage);
authRouter.get('/profile',authController.loggedInUser, authController.showProfilePage);
authRouter.get('/logout',authController.logoutUser);

authRouter.post('/signup',passport.authenticate('local-signup',{
    successRedirect:'/profile',
    faliureRedirect:'/signup',
    failureFlash: true
}))

authRouter.post('/login',passport.authenticate('local-login',{
    successRedirect:'/profile',
    faliureRedirect:'/login',
    failireFlash:true
}))
module.exports = authRouter;