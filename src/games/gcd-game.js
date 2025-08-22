import getRandomNum from '../randomNum.js'
const rules = 'Find the greatest common divisor of given numbers.'
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
  const a = getRandomNum(max, min)
  const b = getRandomNum(max, min)
  const question = `${a} ${b}`
  const answer = gcd(a, b).toString()
  return [question, answer]
}
export { rules, getQuestionAnswer }