import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';

class Success extends Component {
    state = {
        
    }

    render() {
        console.log('admin props', this.props.feedback)
        return(
            <div>
            <h1>Table Goes Here</h1>
            {
              this.props.feedback.map((item) => {
                  return (
                    <div>
                    <p>
                        Feeling: {item.feeling}
                        Comprehension: {item.understanding}
                        Support: {item.support}
                        Comments: {item.comments}
                    </p>
                    </div>
                  )
              })  
            }
            
            </div>
            
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        feedback: reduxState.feedbackReducer
    }
}

export default connect(mapStateToProps)(withRouter(Success));