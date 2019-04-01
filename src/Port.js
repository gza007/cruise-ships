function Port(portName) {
  this.portName = portName;
  this.ships = [];
}

Port.prototype.addShip = function (ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function (departingShip) {
  this.ships = this.ships.filter(ship => ship !== departingShip);
};

module.exports = Port;
