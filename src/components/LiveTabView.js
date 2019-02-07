import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography'
import LiveStreamCard from './LiveStreamCard'
import ClassIdTable from './ClassIdTable'
class LiveTabView extends Component {
    state = {
        objects: []
    }

    componentDidMount() {

    }

    render() {


        return (
            <div>
                <Typography>
                    视频流界面
                </Typography>

                <LiveStreamCard />
                <ClassIdTable />
            </div>
        )
    }
}

export default LiveTabView;