import issueConstants from './../constants/issueConstants';
import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

const initState = {
  user: '',
  feedbackDetail: [],
  productList: [],
  productDetail: {},
  isAuthed: false
}

// 哪个文件调用了这里的login?
  // src/components/Login.js
    // 是在这个文件的props.login(login)里面调用的吗?
      // 不是, 是在这个文件的handleSubmit(event)里面调用的?
        // handleSubmit函数里的props.login(login);是在哪里定义的?
        // 怎么理解props.login？
          // props.login是从<Provider>里传过来的吗?
            // 不是, 是从connect()里传过来的

const login = (state = initState, action) => {
  // action.type是什么?
    // action.type是在src/actions/action.js里的loginAction函数里定义的
  switch (action.type) {
    case issueConstants.LOGIN:
      return {
        ...state,
        isAuthed: action.isAuthenticated,
        user: action.user
        // action.isAuthenticated哪来的,解释下
          // action.isAuthenticated是在src/actions/action.js里的loginAction函数里定义的
      }
    case issueConstants.LOGOUT:
      return {
        ...state,
        ...initState,
      }
    default:
      return state;
  }
}

const productDetail = (state = initState, action) => {
  switch (action.type) {
    case issueConstants.PRODUCT_DETAILS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

const feedbackDetail = (state = initState, action) => {
  switch (action.type) {
    case issueConstants.FEEDBACK_DETAILS:
      return {
        ...state,
        feedbackDetail: action.payload
      }
    case issueConstants.SUBMIT_FEEDBACK:
      return {
        ...state,
        feedbackDetail: [...state.feedbackDetail, action.payload]
      }
    default:
      return state;
  }
}

const submitFeedback = (state = initState, action) => {
  switch (action.type) {
    case issueConstants.SUBMIT_FEEDBACK:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

const productList = handleAction(
  issueConstants.PURCHASED_ITEMS,
  (state, action) => ({
    ...state,
    ...action.payload
  }),
  initState
);

// 如何理解这里的export const getLoginState = state => state.login;
// 为什么要用export const getLoginState = state => state.login;
  // 因为要把这个函数导出去
  // 为什么要把这个函数导出去?
  // 因为要在src/components/Login.js里面使用这个函数
  
export const getLoginState = state => state.login;
export const getProductState = state => state.productDetail.productDetail;
export const getFeedbackDetailsState = state => state.feedbackDetail.feedbackDetail;
export const getFeedbackState = state => state.submitFeedback;
export const getProductList = state => state.productList.productList;

export default combineReducers({
  login,
  productDetail,
  feedbackDetail,
  submitFeedback,
  productList
});

// 这个文件的作用?  
  // 这个文件的作用是: 1. 初始化state, 2. 根据action.type, 返回新的state

// export const getLoginState = state => state.login;
  // 为什么要用export const getLoginState = state => state.login;
  // 因为要把这个函数导出去
  // 为什么要把这个函数导出去?
  // 因为要在src/components/Login.js里面使用这个函数
  // 为什么要在src/components/Login.js里面使用这个函数?
  // 因为要在src/components/Login.js里面使用这个函数里面的state.login
  // 为什么要在src/components/Login.js里面使用这个函数里面的state.login?

// 为什么要用combineReducers? 
  // 因为要把多个reducer合并成一个reducer
  // 为什么要合并成一个reducer?
// reducer的作用是什么?
  // reducer的作用是: 1. 初始化state, 2. 根据action.type, 返回新的state

// combineReducers的返回值是什么?
  // combineReducers的返回值是一个reducer
  // 为什么要返回一个reducer?
  // 因为要把多个reducer合并成一个reducer
  // 如何使用reducer
  // reducer的作用是: 1. 初始化state, 2. 根据action.type, 返回新的state
  
  /**
   * 这是一个Redux reducer函数，它接受先前状态 state 和一个action对象作为参数，
   * 然后根据action对象的 type属性返回新的状态。这个函数看起来是处理用户身份验证的。
   * 在这个函数中，如果接收到类型为 issueConstants.LOGIN 的action，
   * 则将 isAuthed 属性设置为action对象的 isAuthenticated 值，
   * 并将 user 属性设置为action对象的 user 值。如果接收到类型为 issueConstants.LOGOUT 的action，
   * 则将 state 对象重置为初始状态 initState。
   * 在所有其他情况下，即没有匹配到任何已知类型的action，该函数返回先前的 state 对象，不会进行任何状态更改。
   */

// 看完这个文件看哪个文件？
  // src/components/Login.js 
  // 为什么看这个src/components/Login.js文件?
   // 因为这个文件里面有一个handleSubmit(event)函数