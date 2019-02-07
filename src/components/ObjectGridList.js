import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';



const API = 'http://0.0.0.0:5000/search?query='
//const API = 'http://192.168.0.104:5000/search?query='
const DEFAULT_QUERY = 'object'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    //width: 500,
    //height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class ObjectGridList extends Component {
  state = {
    objects: []
  }

  getObject = () => {
    axios.get(API + DEFAULT_QUERY)
      .then(res => {
        const objects = res.data;
        this.setState({ objects })
      })
      .catch(error => {
        console.log("Error occured while fetching data")
        console.log(error)
      })
  }

  componentDidMount() {
    this.getObject();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Objects</ListSubheader>
        </GridListTile>
        
        {this.state.objects.map(tile => (
          <GridListTile key={tile.img}>
            <img alt="" src={"data:image/jpg;base64," +  tile.img} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>by: {tile.value}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
        )
  }
}

ObjectGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ObjectGridList);