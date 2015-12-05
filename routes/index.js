var express = require('express');
var router = express.Router();

// var model = require('./model');
var model = require("../schema/emp")
var Emp = model.Emp;

/* GET home page. */
router.get('/', function (req, res, next) {
    Emp.find(function (err, data) {
        res.render('index', {
            title: '员工列表',
            emps: data
        });
    });
});
router.get('/add',function(req,res,next){
    res.render('add',{title:'增加员工'})
});
router.post('/add',function(req,res,next){
    var emp = new Emp({
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        deptno:req.body.deptno
    });
    emp.save(function(err,data){
        console.log('save----'+data);
        res.redirect('/');
    });
});
router.get('/del',function(req,res,next){
    var id = req.query.id;
    if(id||id==0){
        Emp.findByIdAndRemove(id,function(err,data){
            console.log('remove----'+data);
            res.redirect('/');
        })
    }
});
router.get('/modify',function(req,res,next){
    var id = req.query.id;
    if(id||id==0){
        Emp.findById(id,function(err,data){
            res.render('modify',{
                title:'修改员工',
                emp:data
            });
        });
    }
});
router.post('/modify',function(req,res,next){
    var _id = req.body._id;
    var emp = {
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        deptno:req.body.deptno
    };
    Emp.findByIdAndUpdate(_id,emp,function(err,data){
        console.log('update-----'+data);
        res.redirect('/');
    });
});

module.exports = router;
