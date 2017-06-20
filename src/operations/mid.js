const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js').default

function mid (colourOneRef, colourTwoRef) {
  var colourOne = convert('hsl', colourOneRef)
  var colourTwo = convert('hsl', colourTwoRef)

  var midHue = (colourOne.h + colourTwo.h) / 2
  var midSat = (colourOne.s + colourTwo.s) / 2
  var midLight = (colourOne.l + colourTwo.l) / 2
  var colour = { h: midHue, s: midSat, l: midLight }

  return makeColourObject(colour)
}

module.exports = mid
