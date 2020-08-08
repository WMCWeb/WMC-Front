import React, { Component } from 'react';
import Account2 from './Account2';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width:'100%',
    marginTop:theme.spacing.unit * 3,
    overflowX : 'auto'
  },
  table:{
    minWidth:1080
  }
})

const Account = [
{
  id : 1,
  category: 2,
  input: 3,
  output: 4,
  total: 5,
  script: 6,
},
{
  id : 1,
  category: 2,
  input: 3,
  output: 4,
  total: 5,
  script: 6,
},
{
  id : 1,
  category: 2,
  input: 3,
  output: 4,
  total: 5,
  script: 6,
},
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>카테고리</TableCell>
                <TableCell>입금</TableCell>
                <TableCell>출금</TableCell>
                <TableCell>잔액</TableCell>
                <TableCell>설명</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Account.map(c => {return (<Account2 id ={c.id} category={c.category} input={c.input} output={c.output} total={c.total} script={c.script} />)})} 
              </TableBody>
            </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
