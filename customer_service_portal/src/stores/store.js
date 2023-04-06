import { createStore, compose , applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const enhancerList = [];
const composedEnhancer = compose(applyMiddleware(thunk, logger), ...enhancerList);
// TODO: 
export const initStore = () => createStore(rootReducer, {}, composedEnhancer);

// 解释下第6，7，8行的代码
/**
 * 第6行: createStore是redux提供的方法, 用来创建store
 * 第7行: compose是redux提供的方法, 用来组合多个enhancer
 * enhancer是redux提供的方法, 用来增强store
 * enhancer的作用是: 1. 增强dispatch方法, 2. 增强store的功能
 * 第8行: applyMiddleware是redux提供的方法, 用来应用中间件
 */

// 如果你是面试官，你会问什么问题?
// 为什么要用createStore?
// 为什么要用compose?
// 为什么要用applyMiddleware?
// 为什么要用thunk?
// 为什么要用logger?
// 为什么要用rootReducer?

// createStore的三个参数分别是什么?
    // 第一个参数是reducer, 第二个参数是初始状态, 第三个参数是enhancer
    // 为什么要用reducer?
    // 为什么要用初始状态?
    // 为什么要用enhancer?

// import rootReducer from '../reducers/index';
// 这里的rootReducer是改名了吗?
    // 不是, 因为在customer_service_portal/src/reducers/index.js里面有export default rootReducer;
    // 可是那边export default combineReducers({}); 为什么这边就可以直接用rootReducer?
        // 因为在customer_service_portal/src/reducers/index.js里面有export default rootReducer;
        // 所以这边可以直接用rootReducer

// composedEnhancer是什么?
    // composedEnhancer是一个enhancer, 用来增强store
    // 为什么要用enhancer?
        // enhancer的作用是: 1. 增强dispatch方法, 2. 增强store的功能
    // enhancer是什么?
        // enhancer是redux提供的方法, 用来增强store
    // enhancer的作用是什么?
        // enhancer的作用是: 1. 增强dispatch方法, 2. 增强store的功能

/**
 * 在Redux中，增强器是一个高阶函数，用于包装store以添加额外的功能。增强器可以用于扩展Redux store的行为，例如添加中间件、处理时间旅行和添加支持热重载等。
在你提供的代码中，composedEnhancer 是一个组合增强器，它使用Redux库中的 compose 函数创建。compose 函数将任意数量的增强器函数作为参数，返回一个新的增强器函数，这个新函数是将所有增强器按顺序应用的结果。
通过将 applyMiddleware 函数与两个参数 thunk 和 logger 以及一个附加增强器数组 enhancerList 组合，创建了 composedEnhancer。
applyMiddleware 函数是一个内置的Redux中间件，允许您向Redux store应用其他中间件函数。在这种情况下，应用了两个中间件函数：thunk 和 logger。
thunk 是一个中间件，允许您编写返回函数而不是动作对象的操作创建函数。这对于在Redux中处理异步操作非常有用。
logger 是一个中间件，将Redux状态和操作记录到控制台中，这对于调试非常有用。
使用 applyMiddleware 应用中间件后，使用 compose 函数将结果与 enhancerList 中的任何其他增强器组合，从而创建一个单个的增强器，可以将其应用于Redux store，以添加所需的功能。
因此，const composedEnhancer = compose(applyMiddleware(thunk, logger), ...enhancerList); 创建了一个组合增强器，该增强器应用中间件函数和其他增强器到Redux store，以扩展其功能。
 */