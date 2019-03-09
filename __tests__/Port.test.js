/* globals describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  const port = new Port('Port of Spain')
  it('has a name', () => {
    expect(port.portName).toBe('Port of Spain');
  });
});
