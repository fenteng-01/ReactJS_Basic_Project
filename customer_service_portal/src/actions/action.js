import { createAction } from 'redux-actions';
import axios from 'axios';
import issueConstants from '../constants/issueConstants.js';

// 为什么这里没有loginMe这个函数?
// 为什么logoutMe不喝loginMe一样,自己定义一个函数?
// 因为这里的loginMe和logoutMe是action,它们的作用是返回一个action
export const logoutMe = createAction(issueConstants.LOGOUT);
export const submitFB = createAction(issueConstants.SUBMIT_FEEDBACK);
export const getProduct = createAction(issueConstants.PRODUCT_DETAILS);
export const getPurchasedItems = createAction(issueConstants.PURCHASED_ITEMS);
export const getFeedback = createAction(issueConstants.FEEDBACK_DETAILS);

// 怎么理解这里的return dispatch => { ... }?
  // 这里的return dispatch => { ... }是一个函数,它的作用是把action发出去,这里的action是loginMe这个函数的返回值
  // 这里的loginMe是一个函数,它的作用是返回一个action
  // 我们可以将这个过程比作一个传声筒，Redux 应用程序就像是一个房间，dispatch 函数就像是一个传声筒，
  // 将组件中触发的 action 传递给 store 中的 reducer 函数
export function loginAction(data) {
  return dispatch => {
    axios.get('http://localhost:4000/users')
      .then((res) => {
        let value = res.data
        // result 就是db.json里的'users'数组里的一个对象
        var result = value.find(val => val.username === data.username && val.password === data.password)
        if (result) {
          dispatch(loginMe(true, result.username))
          // 怎么理解这里的dispatch?
          // dispatch是一个函数,它的作用是把action发出去,这里的action是loginMe这个函数的返回值
        }
        else {
          dispatch(loginMe(false))
        }
      })
  }
}

// LOGIN ACTION: 
export function loginMe(isAuthenticated, username) {
  return {
    type: 'LOGIN',
    isAuthenticated: isAuthenticated,
    user: username
  }
}

// LOGOUT ACTION
export function logout() {
  return (dispatch) => {
    dispatch(logoutMe())
  }
}

// GET PRODUCT LIST
export function getPurchasedProductList() {
  return (dispatch) => {
    axios.get('http://localhost:4000/products')
      .then((response) => dispatch(getPurchasedItems({ productList: response.data })))
      .catch(err => console.log(err))
  }
}

// SUBMIT_FEEDBACK
export function submitFeedback(data) {
  return dispatch => {
    axios(`http://localhost:4000/feedbackDetails`, {
      method: 'POST',
      crossdomain: true,
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        dispatch(submitFB(res.data))
      })
      .catch(err => dispatch(submitFB(err)))
  }
}

// PRODUCT_DETAILS
export function getProductDetails(data) {
  let pdtId = data.pdtId;
  return dispatch => {
    axios.get(`http://localhost:4000/products/${pdtId}`)
      .then((res) => { dispatch(getProduct({ productDetail: res.data })) })
      .catch(err => dispatch(getProduct(err)))
  }
}

export function getFeedbackDetails(data) {
  let pdtId = data.pdtId;
  return dispatch => {
    axios.get(`http://localhost:4000/feedbackDetails?pdtCode=${pdtId}`)
      .then((res) => { dispatch(getFeedback(res.data)) })
      .catch(err => dispatch(getFeedback(err)))
  }
}

// 这个文件的作用是把actionCreator和actionType联系起来