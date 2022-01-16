import {useState} from 'react'
import {roomUserModel} from './../Models/roomUserModel'
import {ticTacToeGameConfigModel} from './../Models/TicTacToe/ticTacToeGameConfigModel'
import {ticTacToeGameRulesModel} from './../Models/TicTacToe/ticTacToeGameRulesModel'
import UsePlayers from './UsePlayers'
import UseTicTacToeGameOver from './UseTicTacToeGameOver'

export default function UseTicTacToeGameController(
    players=[new roomUserModel()],
    playerWhoStartsGame=new roomUserModel(),
    gameRules,
    boardModel
){
    const [currentPlayer, setNextCurrentPlayer] = UsePlayers(players, playerWhoStartsGame)
    const [winner] = UseTicTacToeGameOver(boardModel, gameRules)

    return [currentPlayer, setNextCurrentPlayer];
}