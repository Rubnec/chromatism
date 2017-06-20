const convert = require('../helpers/convert-to-type.js').default
const makeColourObject = require('./convert.js')

function complementary (colourRef) {
  var colour = convert('hsl', colourRef)

  colour.h = (colour.h + 180) % 360

  return makeColourObject(colour)
}

module.exports = complementary
