
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducers from "../reducers/rootReducer";
const persistConfig = {
  key: 'authType',
  storage: storage,

};
const pReducer = persistReducer(persistConfig, rootReducers);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };



// import { createStore,applyMiddleware,compose } from "redux";
// import rootReducers from "../reducers/rootReducer";
// import thunk from 'redux-thunk';
// const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;  
// export const store = createStore(
//   rootReducers,
// composeEnhancers(applyMiddleware(thunk))
// );


// import { createStore,applyMiddleware,compose } from "redux";
// import rootReducers from "../reducers/rootReducer";
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
//  import rootReducer from './reducers'

// const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;  
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducers)
// export  default () => {

//   const store = createStore(
//     rootReducers,persistedReducer,
//   composeEnhancers(applyMiddleware(thunk))
//   );
//   let persistor = persistStore(store)
//   return {store,persistor}
// }

