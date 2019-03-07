function Ship(startingPort) {
  this.startingPort = startingPort;
};

Ship.prototype.setSail = function (newPort) {
  this.startingPort = newPort;
};

module.exports = Ship;
