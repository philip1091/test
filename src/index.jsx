import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import reduxPromise from 'redux-promise';


import App from './components/app';
import '../assets/stylesheets/application.scss';

import boxesReducer from './reducers/boxes_reducer';


const reducers = combineReducers({
  boxes: boxesReducer
});
const middlewares = applyMiddleware( reduxPromise);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middlewares = composeEnhancers(applyMiddleware(reduxPromise,logger));

ReactDOM.render(
 <Provider store={createStore(reducers,{}, middlewares)}>
  <App />
</Provider>,
document.getElementById('root')
);
