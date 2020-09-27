import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

class Support extends Component {
    state = {
        number: 0
    }
    // handles input of support rating
    handleChangeFor = (event) => {
        console.log('this is a button', event.target.value)
        // set state to input value if requirements are met
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

    onNext = (value) => {
        // sends support info to redux if requirements are met
        if(this.state.number !== 0) {
            console.log('payload is', this.state.number);
            this.props.dispatch({
            type: "GET_SUPPORT",
            payload: value
        });
            console.log('this.props.history', this.props.history);
            // send user to next page 'comments'
            this.props.history.push('/comments');
        } else {
            // reminds user of requirements
            alert('Submit 1-5')
        }
    }
    // sends user to previous page 'understanding'
    back = () => {
        this.props.history.push('/understanding')
    }

    render() {
        return(
            <div>
                <h1>How well are yu being supported?</h1>
                    <TextField 
                        type="number"
                        min="1"
                        max="5"
                        onChange={(event) => this.handleChangeFor(event)}
                    />
                    <ButtonGroup>
                        <Button variant="contained" 
                            color="primary" 
                            onClick={()=>this.onNext(this.state.number)}>
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

export default connect()(withRouter(Support));