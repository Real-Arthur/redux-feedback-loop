import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feelings from '../Feelings/Feelings';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin'

class App extends Component {
  componentDidMount() {
    this.renderFeedback();
  }

  renderFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      console.log('App.js response is', response);
      console.log('App.js response data is', response.data);
      this.props.dispatch({
        type: 'GET_FEEDBACK',
        payload: response.data
      });
    })
    .catch((error) => {
      console.log('App.js GET error', error)
    })
  }

  submit = (value) => {
    console.log('this is a button', value);
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          {/* FEELINGS */}
          <Route path='/' exact>
            <Feelings />
          </Route>
          {/* UNDERSTANDING */}
          <Route path='/understanding'>
            <Understanding />
          </Route>
          {/* SUPPORT */}
          <Route path='/support'>
            <Support />
          </Route>
          {/* COMMENTS */}
          <Route path='/comments'>
            <Comments />
          </Route>
          {/* REVIEW */}
          <Route path='/review'>
            <Review renderFeedback={this.renderFeedback}/>
          </Route>
          {/* SUCCESS */}
          <Route path='/success'>
            <Success />
          </Route>
          {/* ADMIN */}
          <Route path='/admin'>
            <Admin />
          </Route>
      </div>
      </Router>
    );
  }
}


export default connect()(App);
