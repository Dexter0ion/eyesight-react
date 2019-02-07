import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'


class FaceTabView extends Component {
    state = {
        objects: []
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Typography>
                    面部识别界面
                </Typography>
            </div>
        )
    }
}

export default FaceTabView;