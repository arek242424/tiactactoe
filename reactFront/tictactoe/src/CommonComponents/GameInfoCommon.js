import React from 'react';
import {roomUserModel} from './../Models/roomUserModel'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function GmaeInfoCommon({
    winner,
    currentPlayer
}){





    return (
        <Box className='game-info-main'>
            {winner && <Typography variant='h4'>The Winner is {winner.login}</Typography>}
            {!winner && <Typography variant='h4'>{currentPlayer.login} has move</Typography>}
        </Box>
    )
}