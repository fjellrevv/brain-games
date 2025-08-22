import getRandomNum from '../randomFunc.js'
const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
const max = 100, min = 1
const getQuestionAnswer = () => {
  const num = getRandomNum(min, max)
  const question = num
  const answer = num % 2 === 0 ? 'yes' : 'no'
  return [question, answer]
}
export { rules, getQuestionAnswer }
