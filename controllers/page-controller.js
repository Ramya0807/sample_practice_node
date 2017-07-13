function showHomePage(req,res){
res.render('pages/home');
}

function showAboutPage(req,res){
res.render('pages/home');
}

function showEmployeesPage(req,res){
res.render('pages/employees');
}

module.exports = {
    showHomePage:showHomePage,
    showAboutPage:showAboutPage,
    showEmployeesPage:showEmployeesPage
}