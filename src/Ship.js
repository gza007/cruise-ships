function Ship(currentPort) {
  this.currentPort = currentPort;
};

Ship.prototype.setSail = function setSail() {
  this.currentPort = null;
};

Ship.prototype.dock = function dock(dockingPort) {
  this.currentPort = dockingPort;
};

module.exports = Ship;
