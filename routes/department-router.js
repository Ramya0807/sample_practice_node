var express = require('express');
var deptRouter= express.Router();
var departmentController = require('../controllers/department-controller');
var authController = require('../controllers/auth-controller');

deptRouter.use('/department', authController.loggedInUser);

deptRouter.get('/department', departmentController.getDepartmentDetails);
deptRouter.post('/department/create', departmentController.createDepartment);
deptRouter.get('/department/create', departmentController.showCreateForm);
deptRouter.get('/department/:id', departmentController.showDepartmentDetails);
deptRouter.get('/department/:id/edit', departmentController.showupdatedDetails);
deptRouter.post('/department/:id/edit', departmentController.createupdated);
deptRouter.get('/department/:id/delete', departmentController.showDeletedDetails);
deptRouter.post('/department/:id/delete', departmentController.confirmDeleted);

module.exports = deptRouter;
