import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Feeling extends Component {
    state = {
        number: 0
    }
    // Handler for Feeling rating input
    handleChangeFor = (event) => {
            console.log('this is a button', event.target.value)
            // only sets state if parameters are met
            if(event.target.value >= 1 && event.target.value <= 5) {
                this.setState({
                    ...this.state,
                    number: event.target.value
            })
            } else {
                this.setState({
                    ...this.state,
                    number: 0
            })
                // reminds user of requirements
                alert(`1-5`)
        }
    }
    // Sends feelings rating to redux
    onNext = (value) => {
            // Only sends if requirements are met
            if(this.state.number !== 0) {
                console.log('payload is', this.state.number);
                this.props.dispatch({
                    type: "GET_FEELING",
                    payload: value
            });
            console.log('this.props.history', this.props.history);
            this.props.history.push('/understanding');
            } else {
                // Reminds user of requirements
                alert('Submit 1-5')
    }
}

    render() {
        console.log('number is', this.state.number);
        return(
            <div>
                <h1>How are you feeling today?</h1>
                    <TextField 
                        type="number"
                        min="1"
                        max="5"
                        onChange={(event) => this.handleChangeFor(event)}
                    />
                <Button variant="contained" 
                    color="primary" 
                    onClick={()=>this.onNext(this.state.number)}>
                        NEXT
                </Button>
            </div>
        )
    }
}

export default connect()(withRouter(Feeling));