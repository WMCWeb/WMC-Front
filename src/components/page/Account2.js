import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render(){
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.category}</TableCell>
                <TableCell>{this.props.input}</TableCell>
                <TableCell>{this.props.output}</TableCell>
                <TableCell>{this.props.total}</TableCell>
                <TableCell>{this.props.script}</TableCell>
            </TableRow>
        )
    }
    
};

export default Customer;
