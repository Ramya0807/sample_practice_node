'use strict'
var DepartmentModal = require('../models/department-model');
//var fake  = require()
function getDepartmentDetails(req,res){
    console.log("department Details");
    DepartmentModal.find({}).then(function(result){
        console.log("values obtained"+result);
        res.render('departments/list', { departmentList: result });
    }).catch(function(err){
        console.log(error);
    })  
}
function createDepartment(req,res){
    console.log("create form"+req.body);
    var department = new DepartmentModal(req.body);
    department.save({}).then(function(result){
        res.redirect('/department/' + result.id);
    }).catch(function(err){
        console.log(error);
    })  
}
function showCreateForm(req,res){
    console.log("department Details");
     res.render('departments/create'); 
}
function showDepartmentDetails(req,res){
    var departmentId = req.params.id;
    console.log(" show department Details"+departmentId);
      DepartmentModal.findById(departmentId).then(function(result){
        console.log("values obtained"+result);
         //var successMessage = req.flash('creationSuccess');
        res.render('departments/details', { department: result });
    }).catch(function(err){
        console.log(error);
    })  
}

function showupdatedDetails(req,res){
    var departmentId = req.params.id;
    console.log(" show edit department Details page"+departmentId);
      DepartmentModal.findById(departmentId).then(function(result){
        console.log("values obtained"+result);
        res.render('departments/edit', { department: result });
    }).catch(function(err){
        console.log(error);
    })   
}
function createupdated(req,res){
     var departmentId = req.params.id;
    var departmentBody = req.body;
    console.log(" show edit department Details values"+departmentId);
      DepartmentModal.findByIdAndUpdate(departmentId,departmentBody).then(function(result){
        console.log("values obtained"+result);
        res.redirect('/department/'+departmentId);
    }).catch(function(err){
        console.log(error);
    })   
     
}

function showDeletedDetails(req,res){
    console.log("check the value"+req);
    debugger;
    var departmentId = req.params.id
    console.log("department Details"+departmentId);
     res.render('departments/delete', { departmentId: departmentId });
}
function confirmDeleted(req,res){
    console.log("department Details");
    var departmentId = req.params.id
      DepartmentModal.findByIdAndRemove(departmentId).then(function(result){
        console.log("values obtained"+result);
        res.redirect('/department');
    }).catch(function(err){
        console.log(error);
    })   
}


module.exports = {
    getDepartmentDetails:getDepartmentDetails,
    createDepartment:createDepartment,
    showCreateForm:showCreateForm,
    showDepartmentDetails:showDepartmentDetails,
    showupdatedDetails:showupdatedDetails,
    createupdated:createupdated,
    showDeletedDetails:showDeletedDetails,
    confirmDeleted:confirmDeleted
}