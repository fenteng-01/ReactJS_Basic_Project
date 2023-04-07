import { createStore, compose , applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const enhancerList = [];
const composedEnhancer = compose(applyMiddleware(thunk, logger), ...enhancerList);
export const initStore = () => createStore(rootReducer, {}, composedEnhancer);


// thunk 的用法, 需要实际使用看看.
    // thunk is a middleware that allows you to write action creators that return a function instead of an action. 
    // The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
    // The inner function receives the store methods dispatch and getState as parameters.
// logger 是一个 middleware, 用来打印日志.
// enhancerList 是一个数组, 用来存放 middleware.
// compose 是一个函数, 用来组合 enhancerList 中的 middleware.
// applyMiddleware 是一个函数, 用来组合 thunk 和 logger.
// createStore 是一个函数, 用来创建 store.
// rootReducer 是一个函数, 用来组合 reducer.
// reducer 是一个函数, 用来组合 reducer.
// composedEnhancer 是一个函数, 用来组合 enhancerList 中的 middleware.
// createStore参数: reducer, initialState, enhancer.
// 看完store.js文件后, 我需要看哪个文件?
  // customer_service_portal/src/reducers/index.js

  // 核心概念: createStore, compose, applyMiddleware, thunk, logger, enhancerList, composedEnhancer, initStore, rootReducer, reducer, initialState, enhancer