import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 这里的index.js 在哪里被使用 ?
// 1. 在package.json中的scripts中的start中使用了
// "start": "react-scripts start", 怎么看出使用了 index.js? 通过查看react-scripts的源码
// 在哪里看到了react-scripts的源码? 在node_modules/react-scripts/package.json中的"main": "config/webpack.config.js",
// 在哪里看到了webpack.config.js? 在node_modules/react-scripts/config/webpack.config.js中
// 在哪里看到了index.js? 在node_modules/react-scripts/config/webpack.config.js中的entry: paths.appIndexJs,
// 2. 在public/index.html中使用了
// 3. 在src/index.js中使用了
// 4. 在src/App.js中使用了
// 5. 在src/components/Login.js中使用了
