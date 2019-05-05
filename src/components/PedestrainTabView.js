import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography'
import BarExample from './bar';
class PedestrainTabView extends Component {
    state = {
        objects: []
    }

    componentDidMount() {

    }

    render() {


        return (
            <div>
                <Typography>
                    行人监测
                </Typography>
                
                <BarExample />

            </div>
        )
    }
}

export default PedestrainTabView;