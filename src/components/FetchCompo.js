import React, { Component } from 'react'

const API = '0.0.0.0:5000/search?query='
const DEFAULT_QUERY = 'test'

class FetchCompo extends Component {
    constructor() {
        super();
        this.state = {
            hits: [],
        };
    }

    componentDidMount() {
        fetch(API + DEFAULT_QUERY)
            .then(response => response.json)
            .then(data => this.setState({ hits: data}));
    }

    render() {
        const { hits } = this.state;

        return (
            <ul>

            </ul>
        );
    }

}

export default FetchCompo;