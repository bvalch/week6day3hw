const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  return this.journeys.map((journey) => journey.startLocation)

};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation)

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result= this.journeys.filter((journey) => journey.transport==transport)
  return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result=this.journeys.filter((journey)=> journey.distance>minDistance)
  return result;

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let dist=0;
  this.journeys.forEach((journey)=>{dist+=journey.distance})
  return dist
  

};

Traveller.prototype.getUniqueModesOfTransport = function () {
 const transport=this.journeys.map((journey)=>journey.transport)
let unique=transport.filter((item,index,array)=>array.indexOf(item)===index)
return unique
};


module.exports = Traveller;
