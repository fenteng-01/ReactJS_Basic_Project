import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from './stores/store';

import LoginForm from './components/LoginForm';
import PurchasedItems from "./components/PurchasedItems";
import ProductDetails from "./components/ProductDetails";

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />}></Route>
          <Route path='/purchasedItems' element={<PurchasedItems />}></Route>
          <Route path='/productDetails/:id' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// 这个App文件使用了哪些核心概念? 
  // Provider, BrowserRouter, Routes, Route, element, path, initStore
// 我理解完App.js文件后，接下来要看哪个文件? 
  // customer_service_portal/src/stores/store.js

// 如果你是面试官，你会问什么问题?
// 为什么要用Provider?
// 为什么BrowserRouter外面包裹了Provider?
// 我需要了解Provider里面的源码才去使用Provider吗?
// BrowserRouter的路由配置是React哪个版本的写法?
// 为什么要用BrowserRouter? 而且包括一层Routes?
// Routes里面的Route是什么?
// 为什么要用element?
// 为什么要用path?
// 为什么要initStore?
// 为什么要把initStore放在App.js里面?
// 为什么要把initStore放在src/stores/store.js里面?

// 为什么BrowserRouter外面包裹了Provider? 
  // 因为Provider是react-redux提供的组件, 用来提供store, 为了让所有的子组件都可以使用store, 所以要放在最外层
// 我需要了解Provider里面的源码才去使用Provider吗? 
  // 不需要, 只需要知道Provider是react-redux提供的组件, 用来提供store, 为了让所有的子组件都可以使用store, 所以要放在最外层
// BrowserRouter的路由配置是React哪个版本的写法? 
  // React Router 6.0.0-beta.0
// 为什么要用BrowserRouter? 而且包括一层Routes?
  // BrowserRouter是react-router-dom提供的组件, 用来提供路由功能, Routes是react-router-dom提供的组件, 用来配置路由
// Routes里面的Route是什么?
  // Route是react-router-dom提供的组件, 用来配置路由, element是Route的一个属性, 用来配置路由对应的组件
// 为什么要用element?
  // 因为Route是一个组件, 所以要用element来配置路由对应的组件
  // 所以说Route是通过路径匹配后代替原来的组件?
// 为什么要用path?
  // 因为Route是一个组件, 所以要用path来配置路由的路径

// 为什么要initStore? 
  // 因为要创建store
  // 为什么要创建store?
    // 因为要使用redux
    // 为什么要使用redux?
      // 因为要使用redux-thunk
      // 为什么要使用redux-thunk?
        // 因为要使用redux-logger
        // 为什么要使用redux-logger?
          // 因为要使用redux-devtools-extension
            // 为什么要使用redux-devtools-extension?

// 为什么要把initStore放在App.js里面?
  // 因为要把store传给Provider

  // git commit -m "feat: add App.js"