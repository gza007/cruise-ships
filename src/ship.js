(function exportShip() {
  class Ship {
    constructor(itinerary) {
      this.itinerary = itinerary;
      this.currentPort = itinerary.ports[0];
      this.previousPort = null;
      this.currentPort.addShip(this);
      this.nextPort = itinerary.ports[1];
    }

    setSail() {
      if (this.itinerary.ports.indexOf(this.currentPort) === this.itinerary.ports.length - 1) {
        throw new Error('You have arrived at your final destination!');
      }
      this.previousPort = this.currentPort;
      this.currentPort = '';
      this.previousPort.removeShip(this);
    }

    dock() {
      const itinerary = this.itinerary;
      const portIndex = itinerary.ports.indexOf(this.previousPort);
      this.currentPort = itinerary.ports[portIndex + 1];
      this.currentPort.addShip(this);
      this.nextPort = itinerary.ports[portIndex + 2];
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
}());
