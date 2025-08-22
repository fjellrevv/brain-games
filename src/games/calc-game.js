import getRandomNum from '../randomNum.js'
const rules = 'What is the result of the expression?'
const max = 50, min = 1
const operators = ['+', '-', '*']
const calc = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      return NaN
  }
}
const getQuestionAnswer = () => {
  const a = getRandomNum(max, min)
  const b = getRandomNum(max, min)
  const operator = operators[getRandomNum(operators.length - 1, 0)]
  const question = `${a} ${operator} ${b}`
  const answer = calc(a, b, operator).toString()
  return [question, answer]
}
export { rules, getQuestionAnswer }
