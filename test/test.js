//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var Vehicle = require('../app/models/vehicle')
let mongoose = require("mongoose");
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let apiRouter = require('../app/controllers/apiRouter');
let server = require('../server');
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

global.expect = chai.expect;
global.should = chai.should();

chai.use(chaiHttp);

/*
  * Test the /POST route
  */
 describe('/POST create a new vehicle', () => {
    it("It will create a new vehicle",function(done){
        api.post("/api/create")
        .send({
            id : "5b688252cd0c3d3d97e12544",
            plateNumber: 'FA17524',
            battery : 100,
            fuelLevel : 100,
            location : {
                lat : '1.023675323',
                long : '-56.323699743'
            }
        })
        .expect(201)
        .end(function(err,res){
            done();
        })
    })
})

/*
  * Test the /GET route
  */
describe('/GET vehicles', () => {
    it('it should GET all the vehicles', function(done){
        api.get('/api/getAllVehicles')
        .expect(201)
        .end(function(err,res){
            res.should.have.status(200);
            done();
        })
    });

    it('it should returns a vehicle by id',function(done){
        api.get('/api/findVehicleById/5b688252cd0c3d3d97e12544')
        .expect(201)
        .end(function(err,res){
            done();
        })
    })

    it('it should returns a vehicle by plate number',function(done){
        api.get('/api/findVehicleByPlateNumber/FA17524')
        .expect(201)
        .end(function(err,res){
            done();
        })
    })
});
/*
  * Test the /PUT route
  */
describe('/PUT attribute of the vehicle', () => {
    it('it should change plate number by id',function(done){
        api.put('/api/plateNumber/5b688252cd0c3d3d97e12544/LK123563')
        .expect(201)
        .end(function(err,res){
            done();
        })
    })

    it('it should change fuel level by id',function(done){
        api.put('/api/fuelLevel/5b688252cd0c3d3d97e12544/95')
        .expect(201)
        .end(function(err,res){
            done();
        })
    })

    it('it should change battery by id',function(done){
        api.put('/api/battery/5b688252cd0c3d3d97e12544/95')
        .expect(201)
        .end(function(err,res){
            done();
        })
    })

    it('it should change location by id',function(done){
        api.put('/api/localtion/5b688252cd0c3d3d97e12544/1.2032140521/-1.33412412412456')
        .expect(201)
        .end(function(err,res){
            done();
        })
    })
})

/*
  * Test the /DELETE route
*/
 describe('/DELETE delete the vehicle', () => {
    it("It will delete the vehicle",function(done){
        api.del('/api/destoryVehicleById/5b688252cd0c3d3d97e12544')
        .expect(201)
        .end(function(err,res){
            done();
        })
    })
 });


