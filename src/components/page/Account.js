import React from "react";
import Customer from "../Account/Customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

// 더미 데이터
const sampleData = [
  {
    id: 1,
    category: 2,
    input: 3,
    output: 4,
    total: 5,
    script: 6,
  },
  {
    id: 1,
    category: 2,
    input: 3,
    output: 4,
    total: 5,
    script: 6,
  },
  {
    id: 1,
    category: 2,
    input: 3,
    output: 4,
    total: 5,
    script: 6,
  },
];

const Account = (props) => {
  const { classes } = props;
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
            {sampleData.map((tableData, index) => {
              return (
                  <Customer
                      id={tableData.id}
                      category={tableData.category}
                      input={tableData.input}
                      output={tableData.output}
                      total={tableData.total}
                      script={tableData.script}
                      key={index}
                  />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
  )
}

export default withStyles(styles)(Account);
