import getRandomNum from '../randomNum.js'
const rule = 'Find the greatest common divisor of given numbers.'
const max = 200, min = 1
const gcd = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b
    }
    else {
      b %= a
    }
  }
  return a + b
}
const getQuestionAnswer = () => {
  const a = getRandomNum(min, max)
  const b = getRandomNum(min, max)
  const question = `${a} ${b}`
  const answer = gcd(a, b).toString()
  return [question, answer]
}
export { rule, getQuestionAnswer }
