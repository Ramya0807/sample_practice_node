var request = require('request');
var requestUrl = 'https://api.github.com/users/Ramya0807';
var DepartmentModal = require('../models/department-model');

// function callGithubApi(){
// console.log("test the value");
// }

function getEmployees(req,res){
    console.log(req.headers['Content-Type']);
    var providerId = req.headers.provider_identifier;
    console.log(providerId);
    DepartmentModal.find({}).then(function(result){
        res.status(200).json({data:result});
       res.redirect('/department/' + result.id);
    }).catch(function(err){
        res.status(500).json({message:'Error in fetching data'});
    })
}

function getEmployeeById(req,res){
   var departmentId = req.params.id;
    DepartmentModal.findById(departmentId).then(function(result){
        res.status(200).json({data:result});
         res.render('departments/details', { department: result });
    }).catch(function(err){
        res.status(500).json({message:'Error in fetching data'});
    })
}

function createEmployee(req,res){
   var department = new departmentModal(req.body);
    department.save({}).then(function(result){
        res.status(200).json({data:result});
        res.redirect('/department/'+departmentId);
    }).catch(function(err){
        res.status(500).json({message:'Error in fetching data'});
    })
}

function updateEmployee(req,res){
   var departmentId = req.params.id;
   var departmentBody = req.body;
    DepartmentModal.findByIdAndUpdate(departmentId,departmentBody).then(function(result){
        res.status(200).json({data:result});
        res.render('departments/edit', { department: result });
    }).catch(function(err){
        res.status(500).json({message:'Error in fetching data'});
    })
}

function deleteEmployee(req,res){
   var departmentId = req.params.id;
   var departmentBody = req.body;
    DepartmentModal.findByIdAndRemove(departmentId).then(function(result){
        res.status(200).json({data:result});
          res.redirect('/department');
    }).catch(function(err){
        res.status(500).json({message:'Error in fetching data'});
    })
}

module.exports = {
    //callGithubApi:callGithubApi,
    getEmployees:getEmployees,
    getEmployeeById:getEmployeeById,
    createEmployee:createEmployee,
    updateEmployee:updateEmployee,
    deleteEmployee:deleteEmployee
}
