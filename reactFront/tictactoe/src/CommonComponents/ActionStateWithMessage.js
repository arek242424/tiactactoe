import {actionStateEnum} from './../Enums/actionStateEnum'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'


export default function ActionStateWithMessage({actionState, message}){


    function getMessageColor(){
        if(actionState === undefined){
            return '';
        }   
        else if(actionState === actionStateEnum.FAILED || actionState === actionStateEnum.ERROR ){
            return 'red'
        }
        else if(actionState === actionStateEnum.SUCCESS){
            return 'green'
        }
        else{
            return 'black'
        }
    }

    return (
        <Box sx={{display: 'flex'}}>
            {actionState === actionStateEnum.PENDING && <CircularProgress/>}
            <span style={{color: getMessageColor()}}>{message}</span>
        </Box>
    )
}