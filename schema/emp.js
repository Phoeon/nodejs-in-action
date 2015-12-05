/*
* create by fuyue
*/
// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;
// var emp = new Schema({
// 	id:Number,
//     name:String,
//     age:Number,
//     deptno:Number,
//     createTime : { type: Date, default: Date.now }
// });
// exports.Emp = mongoose.model("emps",emp);
Date.phoeon=321;
var mongoose = require('mongoose');
var Schema = mongoose.Schema; //创建模型
var empSchema = new Schema({
    id:Number,
    name:String,
    age:Number,
    deptno:Number,
    createTime : { type: Date, default: Date.now }
});//  定义了一个新的模型，但是此模式还未和emps集合有关联
exports.Emp = mongoose.model('emps',empSchema);//与emps集合关联