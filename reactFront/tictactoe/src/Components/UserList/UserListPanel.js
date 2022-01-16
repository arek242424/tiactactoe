import React from 'react';
import Box from '@mui/material/Box'
import UserList from './UserList'
import UseAppState from './../../CustomHooks/ReduxStates/UseAppState'

export default function UserListPanel(){

    const {userList} = UseAppState(); 

    return (
        <Box>
            <UserList userList={userList}/>
        </Box>
    )
}