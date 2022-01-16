import React, {useState} from 'react';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import UseInputComponent from '../../CustomHooks/UseInputComponent'
import UseLogginUser from '../../CustomHooks/ApiHooks/UseLogginUser'
import {userModel} from './../../Models/userModel'
import ButtonActionState from './../../CommonComponents/ButtonActionState'
import ActionStateWithMessage from './../../CommonComponents/ActionStateWithMessage'
import {actionStateEnum} from './../../Enums/actionStateEnum'
import UseAppState from './../../CustomHooks/ReduxStates/UseAppState'
import {requestResultEnum} from '../../Enums/requestResultEnum'

export default function LogginUser(){

    const [logginMessage, setLogginMessage]  = useState('');
    const [addingUserState, addNewUser] = UseLogginUser();    
    const [loginValue, loginInput] = UseInputComponent('login', '');
    const {dispatchLoggedUser} = UseAppState()

    async function onLogClick(){
        const user = new userModel(loginValue.current.value);
        var [requestResult, result] = await addNewUser(user);
        
        if(requestResult === requestResultEnum.OK){
            const loggedUserModel = new userModel(result.data.login);
            dispatchLoggedUser(loggedUserModel)
        }
        else{
            if(requestResult === requestResultEnum.INTERNAL_ERROR){
                setLogginMessage('Error while logging user');
            }
            if(requestResultEnum.NOT_OK && result){
                setLogginMessage(result.message)
            }
            
        }
    }

    return (
        <Grid border='groove' alignItems='center'>             
            {loginInput}
            <ButtonActionState actionState={addingUserState} onClick={onLogClick}>Log in</ButtonActionState>
            <ActionStateWithMessage actionState={addingUserState} message={logginMessage}/>
        </Grid>

    )
}