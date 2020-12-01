import React from 'react';
import ReactDOM from 'react-dom';
import ClassTest from './class_test/ClassTest';
import ClassTest2 from './class_test/ClassTest2';
import ClassTest3 from './class_test/ClassTest3';
import ClassTest4 from './class_test/ClassTest4';
import ClassTest5 from './class_test/ClassTest5';
import './index.css';
import ObjectTest from './object_test/ObjectTest';
import ObjectTest2 from './object_test/ObjectTest2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ObjectTest/>
    <ObjectTest2/>
    <ClassTest/>
    <ClassTest2/>
    <ClassTest3/>
    <ClassTest4/>
    <ClassTest5/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
