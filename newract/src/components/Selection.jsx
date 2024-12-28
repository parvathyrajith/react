import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Selection = () => {
    var [name, setname] = useState()
    const setvalue = () => {
        setname("React")
    }
    const setvalue1 = () => {
        setname("Angular")
    }
    const setvalue2 = () => {
        setname("python")
    }
    // useEffect(() => { }, [])
    useEffect(() => {
        setvalue1()
    }, [])
    return (

        <div>
            <Typography variant='h2'>Welcome {name}</Typography><br />
            <Button variant='contained' onClick={setvalue} color='error'>React</Button>&nbsp;&nbsp;
            <Button variant='contained' onClick={setvalue1} color='error'>Anugular</Button>&nbsp;&nbsp;
            <Button variant='contained' onClick={setvalue2} color='error'>Python</Button>
        </div >
    )
}

export default Selection