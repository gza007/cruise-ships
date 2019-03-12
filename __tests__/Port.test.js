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

// Extra Test below, checks if an "undefined" ship passed in removeShip method alters the array.
// Note: The "False Positive" method in ship.js file fails this test

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

// Extra test below, to see if the 2nd ship in the array can be removed (Whitney's test)

describe('Port Constructor', () => {
  const port = new Port('Dublin');
  const mockShip = jest.fn();
  const mockShip2 = jest.fn();
  it('removeShip method', () => {
    port.ships = [mockShip2, mockShip];
    port.removeShip(mockShip);
    expect(port.ships).toEqual([mockShip2]);
    expect(port.ships).not.toContain(mockShip);
  });
});

