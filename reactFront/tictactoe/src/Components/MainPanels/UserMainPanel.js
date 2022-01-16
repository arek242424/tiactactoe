import React from 'react';
import Container from '@mui/material/Container'
import UserListPanel from './../UserList/UserListPanel'

export default function UserMainPanel(){
    
    return (
        <Container className='user-main-panel'>
            <UserListPanel />
        
        </Container>
    )
}