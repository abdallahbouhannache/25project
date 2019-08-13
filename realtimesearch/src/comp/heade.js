import React, { Component } from 'react';
import '../sass/heade.css';

class heade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titl: "Find Jewelery",
            stmnt: " try to look through the list below by"
                + "typing whatever name of jewelery you are seeking "

        };
    }
    render() {
        return (
            <div className="headr">
                <h1>{this.state.titl}</h1>
                <p>
                    {this.state.stmnt}
                </p>
            </div>
        );
    }
}

export default heade;