import { createStore,applyMiddleware,compose } from "redux";
import rootReducers from "../reducers/rootReducer";
import thunk from 'redux-thunk';
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;  
export const store = createStore(
  rootReducers,
composeEnhancers(applyMiddleware(thunk))
);
