import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state ={}, action) => {
    console.log('feedbackReducer action payload', action.payload);
    if(action.type === 'GET_FEEDBACK') {
        let newFeedback = action.payload;
        return newFeedback;
    }
    return state
}


const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    })
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
