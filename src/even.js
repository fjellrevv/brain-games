import readlineSync from 'readline-sync'
const even = () => {
  let x, answerUser, answer
  const max = 50, min = 1
  console.log ('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`)
  for (let i = 0; i < 3; i += 1) {
    x = Math.floor(Math.random() * (max - min + 1)) + min
    answer = x % 2 === 0 ? 'yes' : 'no'
    console.log(`Question: ${x}`)
    answerUser = readlineSync.question('Your answer: ')
    if (answerUser === answer) {
      console.log('Correct!')
    }
    else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${name}!`)
      break
    }
  }
}
export default even
