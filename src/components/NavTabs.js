import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FaceTabView from './FaceTabView';
import ObjectTabView from './ObjectTabView';
import LiveTabView from './LiveTabView';
import PedestrainTabView from './PedestrainTabView';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <LinkTab label="FACE" href="page1" />
              <LinkTab label="OBJECT" href="page2" />
              <LinkTab label="LIVE" href="page3" />
              <LinkTab label="Pedestrain" href="page4" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><FaceTabView /></TabContainer>}
          {value === 1 && <TabContainer><ObjectTabView/></TabContainer>}
          {value === 2 && <TabContainer><LiveTabView/></TabContainer>}
          {value === 3 && <TabContainer><PedestrainTabView/></TabContainer>}
          
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);