import { combineReducers } from "redux";
import productReducer  from "./productReducer";
import { itemReducer } from "./itemReducer";
import {dataReducer} from './dataReducer';
import userReducer from './userReducer';
import {signReducer} from './signReducer';
import {loginReducer} from './loginReducer';
import {signupReducer} from './SignupReducer';
import {signupsellerReducer} from './signupsellerReducer';
 const rootReducers =combineReducers({
        userReducer,
        productReducer,
        itemReducer,
        dataReducer,
        signReducer,
        loginReducer,
        signupReducer,
        signupsellerReducer,
        // sellersignupReducer
      })

export default rootReducers;

