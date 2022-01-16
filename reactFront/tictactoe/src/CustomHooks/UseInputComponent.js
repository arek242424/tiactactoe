import {useRef} from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export default function UseInputComponent(label, initialValue){

    const inputValueRef = useRef(initialValue);

    function getInputView(){
        return (
            <Box>                
                <Typography variatn='h5'>{label}</Typography>
                <TextField inputRef={inputValueRef} defaultValue={initialValue}/>
            </Box>
        )
    }

    

    return [inputValueRef, getInputView()]

}