import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GetRoutes from './Component/Routing/GetRoutes';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './Redux/Store/store';

ReactDOM.render(

    <Provider store ={store}>
      <GetRoutes />
   
</Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
