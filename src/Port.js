(function exportPort() {
  class Port {
    constructor(portName) {
      this.portName = portName;
      this.ships = [];
    }

    addShip(ship) {
      this.ships.push(ship);
    }

    removeShip(departingShip) {
      this.ships = this.ships.filter(ship => ship !== departingShip);
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());
