import React from 'react';
import List from '@mui/material/List'
import UserListRecord from './UserListRecord'

export default function UserList({userList=[]}){


    function generateRecords(){
        return userList.map(user => <UserListRecord user={user}/>)
    }

    return (
        <List>
            {generateRecords()}
        </List>
    )
}