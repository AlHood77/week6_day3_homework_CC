const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    const results = this.journeys.map ((journey) => {
      return journey.startLocation;
    })
    return results;
};


Traveller.prototype.getJourneyEndLocations = function () {
  const results = this.journeys.map ((location) => {
    return location.endLocation;
  })
  return results
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter ( (method) => {
    return method.transport === transport;
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter ( (journey) => {
    return journey.distance > minDistance;
  });
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((runningTotal, journey)=> {
    return runningTotal += journey.distance;
  }, 0);
  return result;
};


Traveller.prototype.getUniqueModesOfTransport = function () {
  array = this.journeys
  const distinct = [...new Set(array.map(mode => mode.transport))];
  return distinct;
};




module.exports = Traveller;
