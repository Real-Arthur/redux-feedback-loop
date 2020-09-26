import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Comments extends Component {
    state = {

    }

    render() {
        return(
            <p>Comments</p>
        )
    }
}


export default connect()(Comments);