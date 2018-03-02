"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var ship = new base_ships_1.Spacecraft('v8');
ship.jumpIntoHiperspace();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHiperspace();
