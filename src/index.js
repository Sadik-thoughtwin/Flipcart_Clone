import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Routing from './Component/Routing/Routing';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './Redux/Store/store';

ReactDOM.render(

    <Provider store ={store}>
      <Routing />
   
</Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
