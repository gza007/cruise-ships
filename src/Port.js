function Port(portName) {
  this.portName = portName;
  this.ships = [];
}

Port.prototype.addShip = function (ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function (ship) {
  this.ships = this.ships.filter(x => x !== ship);
};

module.exports = Port;
