const chai = require('chai')
const expect = chai.expect
const square = require('./square')

describe('square',() => {
  it('should double up', () => {
    expect(square(2)).to.equal(4)
  })
  it('should throw error for NaN',() => {
    expect(square('asd')).to.equal('ERROR')
  })
})
