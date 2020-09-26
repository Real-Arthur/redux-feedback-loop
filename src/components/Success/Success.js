import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';

class Success extends Component {
    
    success = () => {
        this.props.dispatch({
            type: 'RESET'
        })
        this.props.history.push('/');
    }

    render() {

        return(
            <div>
            <h1>Thank You!</h1>
            <button onClick={this.success}>Leave New Feedback</button>
            </div>
            
        )
    }
}



export default connect()(withRouter(Success));