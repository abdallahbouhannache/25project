import { connect } from 'react-redux';
import React, { Component } from 'react';


class PostForms extends Component {

    render() {
        return (
            <div>
                {this.props}
            </div>
        );
    }
}

export default connect(null, {})(PostForms);