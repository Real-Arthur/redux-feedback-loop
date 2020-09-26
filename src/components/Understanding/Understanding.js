import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Understanding extends Component {
    state = {

    }

    render() {
        return(
            <p>Understanding</p>
        )
    }
}


export default connect()(Understanding);