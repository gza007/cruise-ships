function Ship(currentPort) {
  this.currentPort = currentPort;
};

// Above property(?) began as startingPort, now changed. 

Ship.prototype.setSail = function () {
  this.currentPort = null;
};

module.exports = Ship;
