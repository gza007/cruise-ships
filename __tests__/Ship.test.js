/* globals describe it expect */
const Ship = require('../src/Ship.js');

let ship;
let dover;
let calais;
let itinerary;

beforeEach(() => {
  const port = {
    removeShip: jest.fn(),
    addShip: jest.fn(),
  };
  dover = {
    ...port,
    name: 'Dover',
    ships: [],
  };
  calais = {
    ...port,
    name: 'Calais',
    ships: [],
  };
  itinerary = {
    ports: [dover, calais],
  };
  ship = new Ship(itinerary);
});

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    expect(ship.currentPort).toBe(dover);
  });
  it('can set sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(dover.removeShip).toHaveBeenCalledWith(ship);
  });
  it('gets added to port on instantiation', () => {
    expect(dover.addShip).toHaveBeenCalledWith(ship);
  });
});

describe('Dock', () => {
  it('can dock at a different port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.addShip).toHaveBeenCalledWith(ship);
  });
});
