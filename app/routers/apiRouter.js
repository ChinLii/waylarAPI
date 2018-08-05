//import express library
var express = require('express');
var router = express.Router();
var Vehicle = require("../models/vehicle");


//create new Vehicle
router.post("/create",function(req,res){
    var newVehicle = new Vehicle();
    Vehicle.findOne({'plateNumber':req.body.plateNumber},function(err,result){
        if(err){
            //204 No content
            res.status(204).json({error:err});
        }else{
            if(result == null){
                newVehicle.plateNumber = req.body.plateNumber;
                newVehicle.fuelLevel = req.body.fuelLevel;
                newVehicle.battery = req.body.battery;
                newVehicle.location.lat = req.body.lat;
                newVehicle.location.long = req.body.long;
                newVehicle.save(function(err){
                    if(err){
                        //204 No content
                        res.status(204).json({error:err});
                    }else{
                        //201 Created
                        res.status(201).json({error:false,message : "Create vehicle "});
                    }
                })
                console.log(newVehicle);
            }
        }
    })
})

//Update attributes 
//Update plat number 
router.put("/plateNumber/:id/:number", function(req,res){
    Vehicle.findOneAndUpdate({'_id':req.params.id},{$set:{plateNumber: req.params.number}},{ new: true },function(err,result){
        if(err){
            //No content
            res.status(204).json({error:err});
        }else{
            //accepted
            res.status(202).json({error: false,message:"Update plate number successful"});
        }
    })
})

//Update fuel level 
router.put("/fuelLevel/:id/:level",function(req,res){
    Vehicle.findByIdAndUpdate({'_id':req.params.id},{$set:{fuelLevel: req.params.level}},{new: true},function(err,result){
        if(err){
            //No content
            res.status(204).json({error:err});
        }else{
            //accepted
            res.status(202).json({error:false, message: "Update fuel level successful"});
        }
    })
})

//Update battery 
router.put("/battery/:id/:currentBattery",function(req,res){
    Vehicle.findByIdAndUpdate({'_id':req.params.id},{$set:{battery: req.params.currentBattery}},{new: true},function(err,result){
        if(err){
            //No content
            res.status(204).json({error:err});
        }else{
            //accepted
            res.status(202).json({error:false, message: "Update battery successful"});
        }
    })
})

//Update location
router.put("/location/:id/:lat/:long",function(req,res){
    Vehicle.findByIdAndUpdate({'_id':req.params.id},{$set:{'location.lat' : req.params.lat, 'location.long' : req.params.long }},{new: true},function(err,result){
        if(err){
            //No content
            res.status(204).json({error:err});
        }else{
            //accepted
            res.status(202).json({error:false, message: "Update location successful"});
        }
    })
})



module.exports = router;