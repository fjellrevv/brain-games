import getRandomNum from '../randomNum.js'
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const max = 200, min = 1
const isPrime = (num) => {
  if (num < 2) {
    return true
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
const getQuestionAnswer = () => {
  const num = getRandomNum(min, max)
  const question = num
  const answer = isPrime(num) ? 'yes' : 'no'
  return [question, answer]
}
export { rule, getQuestionAnswer }
