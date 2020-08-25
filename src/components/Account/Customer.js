import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Customer = (props) => {
    const { id, category, input, output, total, script } = props;
    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell>{input}</TableCell>
            <TableCell>{output}</TableCell>
            <TableCell>{total}</TableCell>
            <TableCell>{script}</TableCell>
        </TableRow>
    )
}

export default Customer;
