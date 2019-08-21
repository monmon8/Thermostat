'use strict';
describe('Feature Test:', function(){
var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat});
  it("stats at 20 degrees", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});