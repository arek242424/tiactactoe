import {actionStateEnum} from './../Enums/actionStateEnum'
import Button from '@mui/material/Button'


export default function ButtonActionState({onClick, actionState, children}){

    function isButtonDisable(){        
        if(actionState === actionStateEnum.PENDING){
            return true;
        }    
        return false;        
    }

    return (
        <>
            <Button onClick={onClick} disabled={isButtonDisable()}> {children}</Button>
        </>
    )
}