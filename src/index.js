import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GetRoutes from './Component/Routing/GetRoutes';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './Redux/Store/store';
// import {persistor,store} from './Redux/Store/store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(

    <Provider store ={store}>
     < PersistGate  >
          <GetRoutes />
      </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
