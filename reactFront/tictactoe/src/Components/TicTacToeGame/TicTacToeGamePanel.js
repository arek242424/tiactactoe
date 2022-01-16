import React from 'react';
import Box from '@mui/material/Box'
import TicTacToeBoard from './TicTacToeBoard'
import {gameModeEnum} from './../../Enums/gameModeEnum'
import {roomUserModel} from './../../Models/roomUserModel'
import {ticTacToeGameConfigModel} from './../../Models/TicTacToe/ticTacToeGameConfigModel'
import {ticTacToeGameRulesModel} from './../../Models/TicTacToe/ticTacToeGameRulesModel'
import UseTicTacToeBoardModel from './../../CustomHooks/UseTicTacToeGameBoard'
import UsePlayers from './../../CustomHooks/UsePlayers'
import UseTicTacToeGameOver from './../../CustomHooks/UseTicTacToeGameOver'
import GameInfoCommon from './../../CommonComponents/GameInfoCommon'
import UseInputComponent from './../../CustomHooks/UseInputComponent'

export default function TicTacToeGamePanel({
gameMode=gameModeEnum.LOCAL,
players=[new roomUserModel(), new roomUserModel()],
gameConfig=new ticTacToeGameConfigModel(),
gameRules=new ticTacToeGameRulesModel()    
}){
    const [currentPlayer, setNextCurrentPlayer] = UsePlayers(players, players[0]);
    const [boardModel, setBoardModel] = UseTicTacToeBoardModel(gameConfig.boardSize);
    const [winner] = UseTicTacToeGameOver(boardModel, gameRules)
    
    function onPlayerClickField(fieldId){
        boardModel.boardModel.forEach(raw =>{
            raw.forEach(field => {
                if(field.id === fieldId){
                    field.playerWhoClicked = currentPlayer
                }
            })
        })
        setBoardModel({...boardModel})
        setNextCurrentPlayer();
    }



    return (
        <Box>    
            <GameInfoCommon winner={winner} currentPlayer={currentPlayer}/>
            <TicTacToeBoard onFieldClicked={onPlayerClickField} boardModel={boardModel}/>
        </Box>
    )
}