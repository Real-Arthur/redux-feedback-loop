import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Review extends Component {
    state = {
       
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


export default connect()(Review);