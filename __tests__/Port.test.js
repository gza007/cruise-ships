/* globals describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  const port = new Port('Port of Spain');
  it('has a name', () => {
    expect(port.portName).toBe('Port of Spain');
  });
});

describe('add ship', () => {
  it('adds ship to the list of ships at the Port', () => {
    const port = new Port('Dover');
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
});

describe('remove ship', () => {
  it('removes ship from the list of ships at the Port', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
  });
});

// Extra Test below, to see if an undefined ship being passed will alter the array

describe('remove ship', () => {
  it('removes ship from the list of ships at the Port', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};
    const blackPearl = {};
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(blackPearl);
    expect(port.ships).toEqual([titanic, queenMary]);
  });
});
