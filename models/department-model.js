var mongoose = require('mongoose');

var DepartmentSchema = new mongoose.Schema({
    dept_No:Number,
    first_Name:String,
    last_Name:String,
    department:String,
    city:String
});

var DepartmentModal = mongoose.model('Department',DepartmentSchema);

module.exports = DepartmentModal;