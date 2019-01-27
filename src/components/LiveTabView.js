import React, { Component } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography'
import LiveStreamCard from './LiveStreamCard'
class LiveTabView extends Component {
    state = {
        objects: []
    }

    componentDidMount() {

    }

    render() {
        const { classes } = this.props;

        return (
        <div>
                <Typography>
                    视频流界面
                </Typography>
                
                <LiveStreamCard />
                </div>
        )
    }
}

export default LiveTabView;