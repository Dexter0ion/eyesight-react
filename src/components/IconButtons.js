import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
const styles = theme => ({
    
    fab: {
        margin: theme.spacing.unit * 2,
      },
      absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
      },
});

function IconButtons(props) {
  const { classes } = props;
  return (
    <div>
        <Tooltip title="Add" aria-label="Add">
      <Fab size="large" color="secondary"  aria-label="Add an alarm">
        <Icon>alarm</Icon>
      </Fab>
      </Tooltip>
      <Fab size="large" color="primary" aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </Fab>

    </div>
  );
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);