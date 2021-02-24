import React, { useCallback, useEffect, useState } from 'react';

import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import Paper from '@material-ui/core/Paper';

import { fetchUsersAsync } from '../../actions/user';
import { User } from '../../models/entities/User';

import useStyles from './styles';


function UserTable(props: any) {
  const classes = useStyles();

  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    props.fetchUsersAsync(page, pageSize);
  }, [page, pageSize]);

  let users: User[] = props.users;

  const onChangePage = useCallback((event: any, value: number) => {
    setPage(value);
  }, [setPage]);

  const onChangePageSize = useCallback((event: any) => {
    const value: number = event.target.value;
    setPageSize(value);
  }, [setPageSize]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Users">
        <TableHead>
          <TableRow>
            <TableCell>
              <span className={classes.tableName}>Users</span>
            </TableCell>
            <TablePagination 
              onChangePage={onChangePage} 
              onChangeRowsPerPage={onChangePageSize}
              page={page}
              rowsPerPage={pageSize}
              count={-1}
            />
          </TableRow>
          <TableRow>
            <TableCell className={classes.columnTitle}>No.</TableCell>
            <TableCell className={classes.columnTitle}>Fullname</TableCell>
            <TableCell className={classes.columnTitle}>Username</TableCell>
            <TableCell className={classes.columnTitle} align="center">Thumbnail Icon</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: User, index: number) => (
            <TableRow key={user.login.username} className={classes.row}>
              <TableCell>{index + 1}</TableCell>
              <TableCell component="th" scope="row">
                {`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}
              </TableCell>
              <TableCell>{user?.login?.username}</TableCell>
              <TableCell align="center">
                <img src={user?.picture?.thumbnail} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state: any) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUsersAsync: (page: number, pageSize: number) => dispatch(fetchUsersAsync(page, pageSize))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);