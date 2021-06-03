import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


import App from './components/app';
import '../assets/stylesheets/application.scss';

import boxesReducer from './reducers/boxes_reducer';


const reducers = combineReducers({
  boxes: flatsReducer
});


ReactDOM.render(
<Provider store={createStore(reducers)}>
  <App />
</Provider>,
document.getElementById('root')
);
