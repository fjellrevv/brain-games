#!/usr/bin/env node
import startGame from '../src/index.js'
import { rules, getQuestionAnswer } from '../src/games/gcd-game.js'
startGame(rules, getQuestionAnswer)
