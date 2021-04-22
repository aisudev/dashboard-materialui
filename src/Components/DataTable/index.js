import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    root:{
        marginTop: 5
    },
    container:{
        width: '100%',
    },
    title:{
        marginTop:10,
        marginLeft:10
    }
}))

const DataTable = ({data}) => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <TableContainer component={Paper} className={classes.container}>
                <h3 className={classes.title}>{data.title}</h3>
                <Table>
                    <TableHead>
                        <TableRow>
                            {data.head.map(col=>(
                                <TableCell>
                                    {col}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        data.body.map(item=>(
                            <TableRow>
                                {
                                    item.map(col=>(
                                        <TableCell>
                                            {col}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DataTable
