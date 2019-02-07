import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import ObjectList from './ObjectList';
import ObjectGridList from './ObjectGridList';

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
                <ObjectGridList />
                <ObjectList />
            </div>
        )
    }
}

export default ObjectTabView;