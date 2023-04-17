import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const enhancerList = [];
// 测试发现logger会打印在控制台上. 但是thunk不会打印在控制台上,用来处理异步请求 .
const composedEnhancer = compose(applyMiddleware(thunk, logger), ...enhancerList);
export const initStore = () => createStore(rootReducer, {}, composedEnhancer);
