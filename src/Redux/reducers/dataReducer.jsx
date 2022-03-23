import React from 'react'
import { INCREMENT,DECREMENT} from '../Constant/constant';

const initialState = {
    count:0
}

const dataReducer = (state=initialState,action)=>{

    switch(action.type)
    {
        case INCREMENT : 
        return {...state,
            count:action.payload+5}
        // case DECREMENT : return state-1;
        default : return state
    }

}
export default dataReducer;