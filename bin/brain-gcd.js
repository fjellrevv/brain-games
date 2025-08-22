#!/usr/bin/env node
import startGame from '../src/index.js'
import { rule, getQuestionAnswer } from '../src/games/gcd-game.js'
startGame(rule, getQuestionAnswer)
