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
module.exports = Port;
