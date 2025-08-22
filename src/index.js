import readlineSync from 'readline-sync'
const index = (rule, getQuestionAnswer) => {
  const numOfRound = 3
  console.log ('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(rule)
  for (let i = 0; i < numOfRound; i += 1) {
    const [question, answer] = getQuestionAnswer()
    console.log(`Question: ${question}`)
    const answerUser = readlineSync.question('Your answer: ')
    if (answerUser === answer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
export default index
