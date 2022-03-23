import { combineReducers } from "redux";
import productReducer  from "./productReducer";
import { itemReducer } from "./itemReducer";
import dataReducer from "./dataReducer";
import userReducer from './userReducer';

 const rootReducers =combineReducers({
        userReducer,
        productReducer,
        itemReducer,
        dataReducer
      })

export default rootReducers;

