// Don't edit the code below this line up until 'TODO:'
const NUM_ONE = 92837 // eslint-disable-line no-unused-vars
const NUM_TWO = 92827 // eslint-disable-line no-unused-vars
const ARRAY_ONE = [] // eslint-disable-line no-unused-vars
const ARRAY_TWO = ['Hello', 'Conditions', NUM_ONE] // eslint-disable-line no-unused-vars

// TODO: Implement the tasks below to make the tests pass

// 1. Use conditional statements to set answerOne to false if ARRAY_ONE is not empty
// or true if it is empty
let answerOne = ARRAY_ONE.length === 0

// 2. Use conditional statements to set answerTwo to false if ARRAY_TWO is not empty
// or true if it is empty
let answerTwo = ARRAY_TWO.length === 0

// 3. Use conditional statements to set answerThree to true if NUM_ONE is more than NUM_TWO
let answerThree = NUM_ONE > NUM_TWO

// 4. Use conditional statements to set answerFour to true if NUM_ONE or NUM_TWO are included in ARRAY_TWO
let answerFour = hasInArray(ARRAY_TWO, NUM_ONE) || hasInArray(ARRAY_TWO, NUM_TWO)

function hasInArray(arr, condition) {
  return arr.findIndex(function (elm) { return condition === elm }) !== -1
}

// Don't edit the code below this line
module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour
}
