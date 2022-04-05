import { combineReducers } from "redux";
import productReducer  from "./productReducer";
import { itemReducer } from "./itemReducer";
import {dataReducer} from './dataReducer';
import userReducer from './userReducer';
import {signReducer} from './signReducer';
import {loginReducer} from './loginReducer';
 const rootReducers =combineReducers({
        userReducer,
        productReducer,
        itemReducer,
        dataReducer,
        signReducer,
        loginReducer,
      })

export default rootReducers;

