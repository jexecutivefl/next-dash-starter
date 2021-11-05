import React from 'react';
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {API} from "aws-amplify";

const headerInfo=['Store', 'Type', 'Stock Status',  'Last Stocked', 'Price']

const testRows=[
    {store: 'gamestop', type: 'bundle', status: 'out of stock', lastStocked: '2021-10-26T11:21:00-04:00', price: '739.96'},
    {store: 'best buy', type: 'bundle', status: 'out of stock', lastStocked: '2021-10-26T11:21:00-04:00', price: '739.96'},
    {store: 'walmart', type: 'bundle', status: 'out of stock', lastStocked: '2021-10-26T11:21:00-04:00', price: '739.96'},
    {store: 'target', type: 'bundle', status: 'out of stock', lastStocked: '2021-10-26T11:21:00-04:00', price: '399.96'},
    {store: 'playstation direct', type: 'console', status: 'out of stock', lastStocked: '2021-10-26T11:21:00-04:00', price: '399.99'}
]

function TableHeaderBar(){

}

export default function DashboardView(props) {

    async function handleTestSearch(){

        const reqBody = {
            email: 'squareEmail'
        }
        await API.post('findps5api', '/bestbuy/console/5', {
            body: reqBody
        }).then(
            apiResponse => {
                console.log('response is', apiResponse)
            }
        )
    }
    return (
        <div>
            <Button onClick={handleTestSearch}>
                Test Selenium
            </Button>
            <h3>Playstation 5</h3>
            <Table>
                <TableHead>
                    {headerInfo.map((title,index)=>(
                        <TableRow key={index}>
                            <TableCell>
                                {title}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {testRows.map((row, index)=>(
                        <TableRow key={index}>
                            <TableCell>
                                <Typography>{row.store}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{row.type}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{row.status}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{row.lastStocked}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{row.price}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}