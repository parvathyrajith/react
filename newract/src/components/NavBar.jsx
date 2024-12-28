import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <AppBar color='secondary'>
                <Toolbar>
                    <Typography variant='h6'>Registration</Typography>&nbsp;&nbsp;&nbsp;
                    <Link to="/login">
                        <Button variant='contained' color='warning'>Login</Button>
                    </Link>&nbsp;&nbsp;
                    <Link to="/signup">
                        <Button variant='contained' color='warning'>Signup</Button>
                    </Link>&nbsp;&nbsp;
                    <Link to="/toble">
                        <Button variant='contained' color='warning'>Table</Button>
                    </Link>&nbsp;&nbsp;
                    <Link to="/statebasics">
                        <Button variant='contained' color='warning'>State</Button>
                    </Link>&nbsp;&nbsp;
                    <Link to="/counter">
                        <Button variant='contained' color='warning'>Counter</Button>
                    </Link>&nbsp;&nbsp;
                    <Link to="/selection">
                        <Button variant='contained' color='warning'>Selection</Button>
                    </Link>&nbsp;&nbsp;
                    <Link to="/api">
                        <Button variant='contained' color='warning'>Api</Button>
                    </Link>&nbsp;&nbsp;
                    <Link to="/product">
                        <Button variant='contained' color='warning'>Product</Button>
                    </Link>&nbsp;&nbsp;


                </Toolbar >
            </AppBar >
            <br /><br /><br />
        </div >
    )
}

export default NavBar