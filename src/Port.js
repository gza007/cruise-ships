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

/*
THIS METHOD RETURNS "FALSE POSITIVE" AND DOES NOT PASS 2ND REMOVESHIP TEST
Port.prototype.removeShip = function removeShip(ship) {
  this.ships.splice(this.ships.indexOf[ship], 1);
};
*/

module.exports = Port;
