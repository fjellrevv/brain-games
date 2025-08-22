#!/usr/bin/env node
import startGame from '../src/index.js'
import { rule, getQuestionAnswer } from '../src/games/even-game.js'
startGame(rule, getQuestionAnswer)
