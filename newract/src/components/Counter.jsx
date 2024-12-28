import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [number, newnumber] = useState(0)
    const plus = () => {
        newnumber(number + 1)

    }
    const minus = () => {
        newnumber(number - 1)
    }
    return (
        <div>
            <Typography variant='h3'>{number}</Typography>
            <Button variant='contained' onClick={plus}>+</Button>
            <Button variant='contained' onClick={minus}>-</Button>
        </div >
    )
}

export default Counter