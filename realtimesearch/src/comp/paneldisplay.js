import React, { Component } from 'react';
import '../sass/paneldisplay.css';

class paneldisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {

        return (
            <ul className="diswrap" style={{ color: "red" }}>
                {(this.props.searchdata.map((x) => <li key={x.length + Math.random() * (100 - 10) + 10}> {x}</li>))}

            </ul>
        );
    }
}

export default paneldisplay;