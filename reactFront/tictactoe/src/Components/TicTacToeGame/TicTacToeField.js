import React from 'react';
import Button from '@mui/material/Button'
import CrossImage from '@mui/icons-material/Close'
import CircleImage from '@mui/icons-material/RadioButtonUnchecked'
import {ticTacToeEnum} from './../../Enums/ticTacToeEnum'
import {ticTacToeBoardFieldModel} from './../../Models/TicTacToe/ticTacToeBoardFieldModel'

export default function TicTacToeField({
    fieldModel=new ticTacToeBoardFieldModel(),
    onFieldClick=(fieldId)=>{}
})
{

    function onClicked(fieldId){
        onFieldClick(fieldId)
    }

    function getImage() {
        if(fieldModel.playerWhoClicked === undefined) return;

        let image = undefined        
        switch (fieldModel.playerWhoClicked.ticTacToeSign) {
            case ticTacToeEnum.CIRCLE:
                image = <CircleImage />
                break;
            case ticTacToeEnum.CROSS:
                image = <CrossImage />
                break;
            default:
                image = undefined
                break;
        }
        return image;
    }

    return (        
        <>                       
            <Button  
                className='field'          
                sx={{border: '1px', borderStyle: 'groove'}}                                  
                endIcon={getImage()}                
                onClick={()=>{onClicked(fieldModel.id)}}                
            />
        </>
    )

}