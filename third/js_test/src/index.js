import React from 'react';
import ReactDOM from 'react-dom';
import CoincidenceTest from './coincidence_test/CoincidenceTest';
import EqualsTest from './equals_test/EqualsTest';
import './index.css';
import LiteralTest from './literal_test/LiteralTest';
import reportWebVitals from './reportWebVitals';
import TrueFalseDeterminant from './true_false_determinant/TrueFalseDeterminant';

ReactDOM.render(
  <React.StrictMode>
    <TrueFalseDeterminant/>
    <EqualsTest/>
    <CoincidenceTest/>
    <LiteralTest/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
