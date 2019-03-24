/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Itinerary = require('../src/Itinerary.js');

let port;
let ship;
let dover;
let calais;
let itinerary;

beforeEach(() => {
  port = {
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
  itinerary = new Itinerary([dover, calais]);
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
    expect(port.addShip).toHaveBeenCalledWith(ship);
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
