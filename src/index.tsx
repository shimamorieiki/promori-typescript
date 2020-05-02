import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import Test from './Test'
// import Sidebar from './Sidebar'
import Sample from './Sample'
import * as serviceWorker from './serviceWorker';
import Testfun from './Test'
import 'bootstrap/dist/css/bootstrap.min.css';

// var data: string;
// data = "hello";

// const data = [
//   { id: 1, author: "Pete Hunt", text: "This is one comment" },
//   { id: 2, author: "Jordan Walke", text: "This is *another* comment" }
// ];

ReactDOM.render(
  <React.StrictMode>
    {/* <Sidebar /> */}
    {/* <App data="hello" /> */}
    <App />
    <Sample />
    <Testfun />
    {/* <p>{data}</p> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();