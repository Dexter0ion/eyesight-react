import React, { Component } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography'
import ObjectList from './ObjectList';

class ObjectTabView extends Component {
    state = {
        objects: []
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Typography>
                    目标检测界面
                </Typography>
                <ObjectList />
            </div>
        )
    }
}

export default ObjectTabView;