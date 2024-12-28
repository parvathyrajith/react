import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
    return (
        <div>
            <Typography variant='h2'>SignupPage</Typography><br /><br />
            <TextField label="username" variant='outlined' /><br /><br />
            <TextField label="password" variant='outlined' /><br /><br />
            <Button variant='contained'>Signup</Button>
        </div >
    )
}

export default Signup