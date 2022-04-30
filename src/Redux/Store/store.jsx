// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import rootReducers from "../reducers/rootReducer";
// const persistConfig = {
//   key: "authType",
//   storage: storage,
// };
// const pReducer = persistReducer(persistConfig, rootReducers);
// const middleware = applyMiddleware(thunk);
// const store = createStore(pReducer, middleware);
// const persistor = persistStore(store);
// export { persistor, store };
import {rooReducer} from '.'
import {createStore} from 'redux';
import thunk from "redux-thunk";

const store = createStore(rootReducer)