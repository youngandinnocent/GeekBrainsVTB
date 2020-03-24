import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'

import combineReducer from './reducers';
import {robotMiddleware} from "./middlewares/robot.js";
import {signal} from "./middlewares/signal.js";

const logger = createLogger();

const store = createStore(combineReducer, applyMiddleware(robotMiddleware, signal, logger));

export default store;