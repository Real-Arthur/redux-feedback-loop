import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Review extends Component {
    state = {
       
    }


    render() {

        console.log('reduxState is', this.props.reduxState);
        return(
            <div>
            <h1>Review Your Feedback</h1>
            
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