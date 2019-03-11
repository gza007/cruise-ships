function Port(portName) {
  this.portName = portName;
  this.ships = [];
}

Port.prototype.addShip = function (ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function (ship) {
  this.ships = this.ships.filter(x => x !== ship)
};

/* THIS METHOD REMOVES A SHIP FROM PORT LIST EVEN IF AN UNDEFINED SHIP IS PASSED
Port.prototype.removeShip = function removeShip(ship) {
  this.ships.splice(this.ships.indexOf[ship], 1);
};
*/

module.exports = Port;
