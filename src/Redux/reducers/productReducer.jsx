import  {
    FETCH_REQUIEST ,
FETCH_SUCCESS,
FETCH_FAILURE
} from '../Constant/constant'

 const initialState= {
    products:[]
}

const productReducer =  (state=initialState,action)=> {

    switch(action.type){

        case FETCH_REQUIEST : return {...state,products:action.payload}
        case FETCH_SUCCESS : return {...state,products:action.payload.data}
        case FETCH_FAILURE : return {...state,products:action.payload.data}

        default:
            return state
    }
 
}
export default productReducer;