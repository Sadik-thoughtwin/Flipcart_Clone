import { combineReducers } from "redux";
import productReducer  from "./productReducer";
import { itemReducer } from "./itemReducer";
import userReducer from './userReducer';

 const rootReducers =combineReducers({
        userReducer,
        productReducer,
        itemReducer,
      })

export default rootReducers;

