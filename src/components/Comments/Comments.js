import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { TextField } from '@material-ui/core';

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

    onNext = (value, props) => {
            console.log('payload is', this.state.number);
            this.props.dispatch({
                type: "GET_COMMENTS",
                payload: value
            });
            console.log('this.props.history', this.props.history);
            this.props.history.push('/review');
    }

    back = () => {
        this.props.history.push('/support')
    }

    render() {
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                <TextField 
                type="text"
                onChange={(event) => this.handleChangeFor(event)}
            />
            <ButtonGroup>
            <Button variant="contained" color="primary" onClick={()=>this.onNext(this.state.comments)}>NEXT</Button>
            <Button variant="outlined" color="secondary" onClick={() => this.back()}>BACK</Button>
            </ButtonGroup>
            </div>
        )
    }
}


export default connect()(withRouter(Comments));