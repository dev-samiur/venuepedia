import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
	tableContainer: {
width: 800,
		[theme.breakpoints.down('sm')]: {
      width: '100vw'
    },
	}
}));

export default function BasicTable() {
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState('');
  const classes = useStyles();

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:5000/api/booking',
    })
      .then((response) => {
        if (response.data.success) setRows(response.data.success);
        else console.log('Error fetching bookings');
      })
      .catch((err) => {
        console.log('Error fetching bookings');
      });
  }, []);

  const requestSearch = (searchedVal) => {
    const filteredRows = rows.filter((row) => {
      return row.venue.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched('');
    requestSearch(searched);
  };

  return (
    <div className={classes.tableContainer}>
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Venue</TableCell>
                <TableCell align="center">Booked By</TableCell>
                <TableCell align="center">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.date}>
                  <TableCell component="th" scope="row">
                    {row.venue}
                  </TableCell>
                  <TableCell align="center">{row.user}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
