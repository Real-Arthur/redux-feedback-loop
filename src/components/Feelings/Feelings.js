import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Feeling extends Component {
    state = {

    }

    render() {
        return(
            <p>Feeling</p>
        )
    }
}


export default connect()(Feeling);