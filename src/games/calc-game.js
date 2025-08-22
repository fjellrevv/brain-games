import getRandomNum from '../randomNum.js'
const rules = 'What is the result of the expression?'
const max = 50, min = 1
const operators = ['+', '-', '*']
const getQuestionAnswer = () => {
  let answer
  const num_1 = getRandomNum(max, min)
  const num_2 = getRandomNum(max, min)
  const operator = operators[getRandomNum(operators.length - 1, 0)]
  const question = `${num_1} ${operator} ${num_2}`
  switch (operator) {
    case '+':
      answer = num_1 + num_2
      break
    case '-':
      answer = num_1 - num_2
      break
    case '*':
      answer = num_1 * num_2
      break
  }
  return [question, answer.toString()]
}
export { rules, getQuestionAnswer }
