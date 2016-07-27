var express = require('express');
var cal=require('../calculator');
var router=express.Router();

router.get('/add/:param1/:param2',function(req,res){
res.send("Sum:"+cal.addition(parseInt(req.param('param1')),parseInt(req.param('param2'))));
})
router.get('/sub/:param1/:param2',function(req,res){
res.send("Substraction:"+cal.subtraction(parseInt(req.param('param1')),parseInt(req.param('param2'))));
})
router.get('/mul/:param1/:param2',function(req,res){
res.send("Multiplication:"+cal.multiplication(parseInt(req.param('param1')),parseInt(req.param('param2'))));
})

router.get('/mod/:param1/:param2',function(req,res){
res.send("Modulo:"+cal.modulo(parseInt(req.param('param1')),parseInt(req.param('param2'))));
})

router.get('/div/:param1/:param2',function(req,res){
res.send("Division:"+cal.division(parseInt(req.param('param1')),parseInt(req.param('param2'))));
})

module.exports=router;