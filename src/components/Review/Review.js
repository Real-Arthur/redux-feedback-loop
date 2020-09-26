import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Review extends Component {
    state = {
       feelings: this.props.reduxState.feelingReducer,
       understanding: this.props.reduxState.understandingReducer,
       support: this.props.reduxState.supportReducer,
       comments: this.props.reduxState.commentsReducer
    }

    submit = () => {
        axios({
            method: 'POST',
            url: '/inputs',
            data: this.state
        }).then((response) => {
            console.log('response post', response);
            this.props.history.push('/Success');
            this.props.renderFeedback();
        }).catch((error)=> {
            console.log('error is', error)
        })
    }

    render() {

        console.log('reduxState is', this.props.reduxState.commentsReducer);
        console.log('reduxState is', this.props.reduxState.feelingReducer);
        console.log('reduxState is', this.props.reduxState.supportReducer);
        console.log('reduxState is', this.props.reduxState.understandingReducer);
        console.log('state is', this.state)
        return(
            <div>
            <h1>Review Your Feedback</h1>
        <p>Feelings: {this.state.feelings}</p>
        <p>Understanding: {this.state.understanding}</p>
        <p>Support: {this.state.support}</p>
        <p>Comments: {this.state.comments}</p>
        <Button variant="contained" color="primary" onClick={() => this.submit()}>SUBMIT</Button>
            </div>
            
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
        }
    }


export default connect(mapStateToProps)(withRouter(Review));