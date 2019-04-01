function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function setSail() {
  if (this.itinerary.ports.indexOf(this.currentPort) === this.itinerary.ports.length - 1) {
    throw new Error('You have arrived at your final destination!');
  }
  this.previousPort = this.currentPort;
  this.currentPort = null;
  this.previousPort.removeShip(this);
};

Ship.prototype.dock = function dock() {
  const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
  if (previousPortIndex === -1) {
    throw new Error('You are already docked! Try Setting Sail!');
  }
  this.currentPort = this.itinerary.ports[previousPortIndex + 1];
  this.currentPort.addShip(this);
};


module.exports = Ship;
