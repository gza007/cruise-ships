/* globals describe it expect */
const Port = require('../src/port.js');

let port;
let titanic;
let queenMary;
let blackPearl;

beforeEach(() => {
  port = new Port('Dover');
  titanic = jest.fn();
  queenMary = jest.fn();
  blackPearl = jest.fn();
});

describe('Port', () => {
  it('can be instantiated', () => {
    expect(port).toBeInstanceOf(Object);
  });
  it('has a name', () => {
    expect(port.portName).toBe('Dover');
  });
});

describe('add ship', () => {
  it('adds ship to the list of ships at the Port', () => {
    port.addShip(titanic);
    expect(port.ships).toEqual([titanic]);
  });
});

describe('remove ship', () => {
  it('removes last element from the array', () => {
    port.ships = [titanic, queenMary];
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
    expect(port.ships).not.toContain(queenMary);
  });
  it('checks array is unaffected by calling removeShip method with ship not already in array', () => {
    port.ships = [titanic, queenMary];
    port.removeShip(blackPearl);
    expect(port.ships).toEqual([titanic, queenMary]);
  });
  it('removes first in the array', () => {
    port.ships = [queenMary, titanic];
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
    expect(port.ships).not.toContain(queenMary);
  });
});
