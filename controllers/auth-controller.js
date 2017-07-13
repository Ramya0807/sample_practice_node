
function showSignupPage(req,res){
    console.log("show singup page");
    res.render('auth/signup', { errors: req.flash('signupMessage') });
}

function showLoginPage(req,res){
    console.log("show login page");
    res.render('auth/login');
}

function showProfilePage(req,res){
    console.log("show login page");
    res.render('auth/profile',{user:req.user});
}

function loggedInUser(req,res,next){
    if(req.isAuthenticated()){
        console.log("is authenticated");
         return next();
    }
    console.log('not yet authenticated');
    res.redirect('/login');

}

function logoutUser(req, res){
    console.log("logout out the user");
    req.logout();
    res.redirect('/login');
}

module.exports = {
showSignupPage:showSignupPage,
showLoginPage:showLoginPage,
showProfilePage:showProfilePage,
loggedInUser:loggedInUser,
logoutUser:logoutUser
}