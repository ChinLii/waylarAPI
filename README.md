# Waylar REST API Application

This web application developed by Node.js, MongoDB and Express.js as a framework.
It use MVC as a design pattern 

    Model: app/models
    View: View
    Controller : app/controllers

 Using chai.js and Mocha for REST API testing
 
 RESTFul API sheets
 
    URL                                    HTTP Method       Parameter              Action                    Return data             
    
    /api/create                             POST             PlateNumber,        Create a new vehicle           -   
                                                             FuelLevel,
                                                             battery,
                                                             lat,
                                                             long
    /api/plateNumber/:id/:number            PUT              id,number          Update plat number by ID        -
    /api/fuelLevel/:id/:level               PUT              id,level           Update fuel level by ID         -
    /api/battery/:id/:currentBattery        PUT              id,currentBattery  Update battery by ID            -
    /api/location/:id/:lat/:long            PUT              id,lat,long        Update location by ID           -
    /api/getAllVehicles                     GET                -                Get all vehicles            List of Vehicles
    /api/findVehicleById/:id                GET              id                 Get a vehicle by ID         The vehicle object
    /api/findVehicleByPlateNumber/:number   GET              number             Get a vehicle by plate      The vehicle object 
                                                                                number
    /api/destoryVehicleById/:id             DELETE           id                 Remove a vehicle by ID          -          
