import { combineReducers } from "redux";
import productReducer  from "./productReducer";
import { itemReducer } from "./itemReducer";
import {dataReducer} from './dataReducer';
import userReducer from './userReducer';
import {signReducer} from './signReducer';
import {loginReducer} from './loginReducer';
import {signupReducer} from './SignupReducer';
import {signupsellerReducer} from './signupsellerReducer';
import {loginsellerReducer} from './loginsellerReducer';
import {AllSellerReducer } from './AllSellerReducer';
 const rootReducers =combineReducers({
        userReducer,
        productReducer,
        itemReducer,
        dataReducer,
        signReducer,
        loginReducer,
        signupReducer,
        signupsellerReducer,
        loginsellerReducer,
        AllSellerReducer
      })

export default rootReducers;

