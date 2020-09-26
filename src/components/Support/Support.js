import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Support extends Component {
    state = {

    }

    render() {
        return(
            <p>Support</p>
        )
    }
}


export default connect()(Support);