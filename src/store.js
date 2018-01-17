import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './Ducks/reducer.js';

export default createStore(
    reducer,
    applyMiddleware(promiseMiddleware())
);