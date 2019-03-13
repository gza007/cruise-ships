/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });
  it('has a current port', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toEqual(dover);
  });
  it('can set sail', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });
  it('gets added to port on instantiation', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
    expect(dover.ships).toContain(ship);
  });
});

describe('Dock', () => {
  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
});
