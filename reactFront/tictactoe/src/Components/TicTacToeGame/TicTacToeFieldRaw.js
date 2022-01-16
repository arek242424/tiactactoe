import React from 'react';
import TicTacToeField from './TicTacToeField'

export default function TicTacToeFieldRaw({
    fieldsRaw=[],
    onFieldClick=(fieldId)=>{}
}){

    function getFields(){
        return fieldsRaw.map(field => {
            return <TicTacToeField key={field.id} fieldModel={field}  onFieldClick={onFieldClick}/>
        })
    }


    return(
        <div>
            {fieldsRaw && getFields()}
        </div>
    )
}