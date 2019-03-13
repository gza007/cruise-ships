function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function setSail() {
  this.previousPort = this.currentPort;
  this.currentPort = null;
  this.previousPort.removeShip(this);
};

Ship.prototype.dock = function dock() {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
  this.currentPort = itinerary.ports[previousPortIndex + 1];
  this.currentPort.addShip(this);
};


module.exports = Ship;
