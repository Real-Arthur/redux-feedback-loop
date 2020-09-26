import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state ={}, action) => {
    // console.log('feedbackReducer action payload', action.payload);
    // console.log('feedbackReducer type', action.type);
    if(action.type === 'GET_FEEDBACK') {
        let newFeedback = action.payload;
        return newFeedback;
    }
    return state;
};

const feelingReducer = (state={}, action) => {
    // console.log('feeling reducer payload', action.payload);
    // console.log('feeling action type', action.type);
    if(action.type === 'GET_FEELING') {
        let newFeeling = action.payload;
        return newFeeling;
    }
    return state;
}

const understandingReducer = (state={}, action) => {
    // console.log('understanding reducer payload', action.payload);
    // console.log('understanding action type', action.payload);
    if(action.type === 'GET_UNDERSTANDING') {
        let newUnderstanding = action.payload;
        return newUnderstanding;
    }
    return state;
}

const supportReducer = (state={}, action) => {
    console.log('understanding reducer payload', action.payload);
    console.log('understanding action type', action.payload);
    if(action.type === 'GET_SUPPORT') {
        let newSupport = action.payload;
        return newSupport;
    }
    return state;
}

const commentsReducer = (state={}, action) => {
    console.log('understanding reducer payload', action.payload);
    console.log('understanding action type', action.payload);
    if(action.type === 'GET_COMMENTS') {
        let newComments = action.payload;
        return newComments;
    }
    return state;
}


const reduxStore = createStore(
    combineReducers({
        feedbackReducer,
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
