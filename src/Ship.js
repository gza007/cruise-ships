class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  setSail() {
    if (this.itinerary.ports.indexOf(this.currentPort) === this.itinerary.ports.length - 1) {
      throw new Error('You have arrived at your final destination!');
    }
    this.previousPort = this.currentPort;
    this.currentPort = null;
    this.previousPort.removeShip(this);
  }

  dock() {
    const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
    const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
    if (previousPortIndex + 1 === currentPortIndex) {
      throw new Error('You are already docked! Try Setting Sail!');
    }
    this.currentPort = this.itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShip(this);
  }
}
module.exports = Ship;
