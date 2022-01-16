import React, {useState} from 'react';
import TicTacToeFieldRaw from './TicTacToeFieldRaw'
import Box from '@mui/material/Box'
import {ticTacToeBoardModel} from './../../Models/TicTacToe/ticTacToeBoardModel'
import {roomUserModel} from './../../Models/roomUserModel'

export default function TicTacToeBoard({
    boardModel=new ticTacToeBoardModel(),
    currentPlayer=new roomUserModel(),
    onFieldClicked=(fieldId)=>{}
}){


    function getTicTacToeFieldRaws(){
        let rawIndex=0;
        return boardModel.boardModel.map(raw => {
            return <TicTacToeFieldRaw key={rawIndex++} onFieldClick={onFieldClicked} fieldsRaw={raw}/>
        })
    }

    return (
        <Box className='game-board-main'>
            <Box>
                {boardModel && getTicTacToeFieldRaws()}
            </Box>
        </Box>
    )
}