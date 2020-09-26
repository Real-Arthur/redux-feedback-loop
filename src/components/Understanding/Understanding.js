import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Understanding extends Component {
    state = {
        number: 0
    }

    handleChangeFor = (event) => {
        console.log('this is a button', event.target.value)
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
            alert(`1-5`)
        }
    }

    onNext = (value) => {
        console.log('payload is', this.state.number);
        this.props.dispatch({
            type: "GET_UNDERSTANDING",
            payload: value
        });
        console.log('this.props.history', this.props.history);
        this.props.history.push('/support');
    }

    render() {
        console.log('this is understanding', this.state.number)
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
                <input 
                type="number"
                min="1"
                max="5"
                onChange={(event) => this.handleChangeFor(event)}
                
            />
            <button onClick={()=>this.onNext(this.state.number)}>NEXT</button>
            </div>
        )
    }
}


export default connect()(withRouter(Understanding));