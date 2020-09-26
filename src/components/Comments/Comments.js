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

    onNext = (value) => {
            console.log('payload is', this.state.number);
            this.props.dispatch({
                type: "GET_COMMENTS",
                payload: value
            });
            console.log('this.props.history', this.props.history);
            this.props.history.push('/review');
    }

    render() {
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                <input 
                type="text"
                onChange={(event) => this.handleChangeFor(event)}
            />
            <button onClick={()=>this.onNext(this.state.comments)}>NEXT</button>

            </div>
        )
    }
}


export default connect()(withRouter(Comments));