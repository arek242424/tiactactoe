import React from 'react'
import ListItem from '@mui/material/ListItem'

export default function UserListRecord({user}){


    return (
        <ListItem>
            {user && user.login}
        </ListItem>
    )
}
