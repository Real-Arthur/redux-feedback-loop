import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Comments extends Component {
    state = {
        comments: ''
    }

    handleChangeFor = (event) => {
        console.log('this is a button', event.target.value)
            this.setState({
                ...this.state,
                comments: event.target.value
            })
        }

    render() {
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                <input 
                type="text"
                onChange={(event) => this.handleChangeFor(event)}
            />
            </div>
        )
    }
}


export default connect()(Comments);