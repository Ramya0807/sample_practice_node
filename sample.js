//var express = require('express');
var faker = require('faker');
var mongoose = require('mongoose');
var count = 0;
mongoose.connect('mongodb://localhost/ramya');
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/limetools');
var  departmentModel = require('./models/department-model');
console.log("testing"+departmentModel);
 departmentModel.remove({}).then(function(){
     for (var i=0; i<5;i++){
departmentObj = new departmentModel();
departmentObj.dept_No = faker.random.number();
departmentObj.first_Name = faker.name.firstName();
departmentObj.last_Name = faker.name.lastName();
departmentObj.department = 'HR';
departmentObj.city = faker.address.city();
departmentObj.save(function(err) {
            if (err)
                throw err;
            count++;
            if (count == 5)
            {
                console.log('All records successfully inserted');
                mongoose.disconnect();
            }
        });
     }
 }).catch(function(err){
   console.log("data not able to remove");
   mongoose.disconnect();
});
//var app = express();
// app.listen('3000',function(){
// console.log('sample server running at 3000');
// });