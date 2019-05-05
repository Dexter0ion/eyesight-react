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

import DoughnutTarget from './DoughnutTarget'


const API = 'http://94.191.13.184:5000/api/'
//const API = 'http://0.0.0.0:5000/api/'
const DEFAULT_QUERY = 'classid'

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 600,
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },

  });

const mcolor=['#8e44ad','#e67e22','#f1c40f','#16a085','#1abc9c','#2c3e50']
class ClassIdTable extends Component {
    
    state = {
        idlist: [],
        graphdata : {
          labels:[],
          datasets:[{
            data:[]
          }]
        }
    }

    getIdList = () => {
        axios.get(API + DEFAULT_QUERY)
            .then(res => {
                const idlist = Array.from(res.data.idlist);
                console.log(idlist)
                console.log(typeof(idlist))
                this.setState({ idlist })
                
                const graphdata = {
                  labels:[],
                  datasets:[{
                    data:[],
                    backgroundColor: [

                      ],
                      hoverBackgroundColor: [

                      ]
                  }]
                }

                for(var key in idlist){
                  console.log(key)
                  graphdata['labels'].push(idlist[key].name)
                  graphdata['datasets'][0]['data'].push(idlist[key].cnt)
                  var rcolor=mcolor[Math.round(Math.random()*(mcolor.length-1))]
                  graphdata['datasets'][0]['backgroundColor'].push(rcolor)
                  graphdata['datasets'][0]['hoverBackgroundColor'].push(rcolor)
                  console.log(graphdata)
                }
                this.setState({ graphdata })
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
            <DoughnutTarget data={this.state.graphdata} />
          </Paper>
          
        )
        
    }
}

ClassIdTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(ClassIdTable);
