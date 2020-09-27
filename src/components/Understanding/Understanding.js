import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

class Understanding extends Component {
    state = {
        number: 0
    }
    // handler for understanding rating
    handleChangeFor = (event) => {
        console.log('this is a button', event.target.value)
        // sets state if requirements are met
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
    // sends understanding info to redux
    onNext = (value) => {
        // sends info if requirements are met
        if (this.state.number !== 0){
        console.log('payload is', this.state.number);
        this.props.dispatch({
            type: "GET_UNDERSTANDING",
            payload: value
        });
        console.log('this.props.history', this.props.history);
        // sends user to next page 'support'
        this.props.history.push('/support');
        } else {
            // reminds user of requirements
            alert('Submit 1-5')
        }
    }
    // send user back to previous page
    back = () => {
        this.props.history.push('/')
    }

    render() {
        console.log('this is understanding', this.state.number)
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
                    <TextField 
                        type="number"
                        min="1"
                        max="5"
                        onChange={(event) => this.handleChangeFor(event)}
                
                    />
                <ButtonGroup>
                    <Button variant="contained" 
                        color="primary" 
                        onClick={() => this.onNext(this.state.number)}>
                            NEXT
                    </Button>
                    <Button variant="outlined" 
                        color="secondary" 
                        onClick={() => this.back()}>
                            BACK
                    </Button>
                </ButtonGroup> 
            </div>
        )
    }
}

export default connect()(withRouter(Understanding));