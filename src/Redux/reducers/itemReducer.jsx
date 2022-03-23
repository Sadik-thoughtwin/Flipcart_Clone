import {ADD_TO_CART,REMOVE_TO_CART }from '../Constant/constant';
const initialState = []
export const itemReducer = (state=initialState,action) =>{
   
    switch(action.type){
        case ADD_TO_CART : 
        const cardData =action.payload
        return [...state,{...cardData}]
        case REMOVE_TO_CART  :
            console.log("state2",state)
        return [state.filter(remove=>remove.id !== action.payload.id)]

        default: return  state
    }
}