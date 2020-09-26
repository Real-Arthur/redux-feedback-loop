import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Feeling extends Component {
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

    render() {
        console.log('number is', this.state.number);
        return(
            <div>
            <h1>How are you feeling today?</h1>
            <input 
            type="number"
            min="1"
            max="5"
            onChange={(event) => this.handleChangeFor(event)}
            />
            <button onClick={this.onNext}>NEXT</button>
            </div>
            
        )
    }
}


export default connect()(Feeling);