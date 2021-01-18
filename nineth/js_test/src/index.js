import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NonPromiseTest from "./promise_test/NonPromiseTest";
import PromiseTest from "./promise_test/PromiseTest";
import PromiseTest2 from "./promise_test/PromiseTest2";
import PromiseTest3 from "./promise_test/PromiseTest3";
import PromiseTest4 from "./promise_test/PromiseTest4";
import PromiseTest5 from "./promise_test/PromiseTest5";
import PromiseTest6 from "./promise_test/PromiseTest6";
import PromiseTest7 from "./promise_test/PromiseTest7";
import PromiseTest8 from "./promise_test/PromiseTest8";
import PromiseTest9 from "./promise_test/PromiseTest9";
import PromiseTest10 from "./promise_test/PromiseTest10";
import PromiseTest11 from "./promise_test/PromiseTest11";
import PromiseTest12 from "./promise_test/PromiseTest12";
import PromiseParallelTest from "./promise_test/PromiseParallelTest";
import PromiseParallelTest2 from "./promise_test/PromiseParallelTest2";
import PromiseParallelTest7 from "./promise_test/PromiseParallelTest7";
import PromiseParallelTest3 from "./promise_test/PromiseParallelTest3";
import PromiseParallelTest4 from "./promise_test/PromiseParallelTest4";
import PromiseParallelTest5 from "./promise_test/PromiseParallelTest5";
import PromiseParallelTest6 from "./promise_test/PromiseParallelTest6";

ReactDOM.render(
  <React.StrictMode>
    <NonPromiseTest/>
    <PromiseTest/>
    <PromiseTest2/>
    <PromiseTest3/>
    <PromiseTest4/>
    <PromiseTest5/>
    <PromiseTest6/>
    <PromiseTest7/>
    <PromiseTest8/>
    <PromiseTest9/>
    <PromiseTest10/>
    <PromiseTest11/>
    <PromiseTest12/>
    <PromiseParallelTest/>
    <PromiseParallelTest2/>
    <PromiseParallelTest3/>
    <PromiseParallelTest4/>
    <PromiseParallelTest5/>
    <PromiseParallelTest6/>
    <PromiseParallelTest7/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
