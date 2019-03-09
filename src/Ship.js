function Ship(currentPort) {
  this.currentPort = currentPort;
};

Ship.prototype.setSail = function () {
  this.currentPort = null;
};

Ship.prototype.dock = function (dockingPort) {
  this.currentPort = dockingPort;
};

module.exports = Ship;
