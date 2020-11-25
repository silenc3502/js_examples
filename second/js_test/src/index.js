import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataType from './data_type/DataType';
import reportWebVitals from './reportWebVitals';
import LetVariable from "./let_var/LetVariable";
import ConstItemArr from "./const_arr/ConstItemArr";
import SymbolTest from "./symbol/SymbolTest";

ReactDOM.render(
  <React.StrictMode>
    <DataType/>
    <LetVariable/>
    <ConstItemArr/>
    <SymbolTest/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
