import getRandomNum from '../randomNum.js'
const rule = 'What number is missing in the progression?'
const createProgression = (startProgres, progresStep, progresLength) => {
  const progression = []
  for (let i = 0; i < progresLength; i += 1) {
    progression.push(startProgres + (progresStep * i))
  }
  return progression
}
const getQuestionAnswer = () => {
  const startProgres = getRandomNum(1, 50)
  const progresStep = getRandomNum(2, 20)
  const progresLength = getRandomNum(5, 10)
  const progression = createProgression(startProgres, progresStep, progresLength)
  const index = getRandomNum(0, progresLength - 1)
  const answer = progression[index].toString()
  progression[index] = '..'
  const question = progression.join(' ')
  return [question, answer]
}
export { rule, getQuestionAnswer }
