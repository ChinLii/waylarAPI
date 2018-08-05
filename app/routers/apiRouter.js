//import express library
var express = require('express');
var router = express.Router();
var Vehicle = require("../models/vehicle");

router.post("/create",function(req,res){
    var newVehicle = new Vehicle();
    Vehicle.findOne({'plateNumber':req.body.plateNumber},function(err,result){
        if(err){
            //500 Internal Server Error
            res.status(500).json({error:err});
        }else{
            if(result == null){
                newVehicle.plateNumber = req.body.plateNumber;
                newVehicle.fuelLevel = req.body.fuelLevel;
                newVehicle.battery = req.body.battery;
                newVehicle.location.lat = req.body.lat;
                newVehicle.location.long = req.body.long;
                newVehicle.save(function(err){
                    if(err){
                        //404 Not Found
                        res.status(404).json({error:err});
                    }else{
                        //201 Created
                        res.status(201).json({error:false,message : "Create vehicle "});
                    }
                })
            }
        }
    })
})

module.exports = router;