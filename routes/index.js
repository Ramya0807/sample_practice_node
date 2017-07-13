var departmentRouter = require('./department-router');
var authRouter = require('./auth-router');
var pageRouter = require('./page-router');
var apiRouter = require('./api-router');


module.exports = function(app){
    app.use(departmentRouter);
   app.use(authRouter);
   app.use(pageRouter);
   app.use(apiRouter);
};