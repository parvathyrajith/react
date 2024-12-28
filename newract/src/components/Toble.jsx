import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const Toble = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Movie</TableCell>
                            <TableCell>Actor</TableCell>
                            <TableCell>Actress</TableCell>
                            <TableCell>Year</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>KGF</TableCell>
                            <TableCell>Yash</TableCell>
                            <TableCell>Srinidhi</TableCell>
                            <TableCell>2020</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Bahubali</TableCell>
                            <TableCell>Prabas</TableCell>
                            <TableCell>Anushka</TableCell>
                            <TableCell>2017</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Toble

