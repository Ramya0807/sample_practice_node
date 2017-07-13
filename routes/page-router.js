var express = require('express');
var pageRouter = express.Router();
var pageController = require('../controllers/page-controller');
var authController = require('../controllers/auth-controller');

pageRouter.use('/', authController.loggedInUser);
pageRouter.use('/about', authController.loggedInUser);
pageRouter.get('/employees', authController.loggedInUser);

pageRouter.get('/', pageController.showHomePage);
pageRouter.get('/about', pageController.showAboutPage);
pageRouter.get('/employees', pageController.showEmployeesPage);

module.exports = pageRouter;