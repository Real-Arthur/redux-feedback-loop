import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

class Success extends Component {
    // Resets saved redux reducers and sends user 'home'
    success = () => {
        this.props.dispatch({
            type: 'RESET'
        })
        this.props.history.push('/');
    }

    admin = () => {
        this.props.dispatch({
            type: 'RESET'
        })
        this.props.history.push('/admin')
    }

    render() {
        return(
            <div>
                <h1>Thank You!</h1>
                    <Button variant="contained" 
                    color="primary" 
                    onClick={this.success}>
                        Leave New Feedback
                    </Button>
                    <br></br>
                    <Button variant="contained" 
                    color="primary" 
                    onClick={this.admin}>
                        Admin
                    </Button>
            </div>
        )
    }
}

export default connect()(withRouter(Success));