var express = require('express');
var apiRouter = express.Router();
var apiController = require('../controllers/api-controller');

//apiRouter.get('/github', apiController.callGithubApi);

apiRouter.get('/api/department', apiController.getEmployees);
apiRouter.get('/api/department/:id', apiController.getEmployeeById);
apiRouter.post('/department/create', apiController.createEmployee);
apiRouter.put('/department/:id/edit', apiController.updateEmployee);
apiRouter.delete('/department/:id/delete', apiController.deleteEmployee);

module.exports = apiRouter;