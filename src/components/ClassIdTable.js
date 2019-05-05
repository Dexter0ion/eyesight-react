import React, { Component } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const API = 'http://94.191.13.184:5000/api/'
//const API = 'http://0.0.0.0:5000/api/'
const DEFAULT_QUERY = 'classid'

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class ClassIdTable extends Component {
    
    state = {
        idlist: []
    }

    getIdList = () => {
        axios.get(API + DEFAULT_QUERY)
            .then(res => {
                const idlist = Array.from(res.data.idlist);
                console.log(idlist)
                console.log(typeof(idlist))
                this.setState({ idlist })
            })
            .catch(error => {
                console.log("Error occured while fetching data")
                console.log(error)
            })
    }

    componentDidMount() {
        this.getIdList();
    }

    render() {
        const { classes } = this.props;
        /*
        var data = {
          labels:[],
          datasets:[{
            data:[],
          }]
        }
        */
        return (
            <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Count</TableCell>
                  <TableCell align="right">Id</TableCell>
                  <TableCell align="right">Name</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.idlist.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.cnt}</TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>

                    
                  </TableRow>

                  
                ))}
              </TableBody>
            </Table>
          </Paper>
        )
        
    }
}

ClassIdTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(ClassIdTable);
