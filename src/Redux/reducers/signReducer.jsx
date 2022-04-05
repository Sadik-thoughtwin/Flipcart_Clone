import  {FETCH_REQUIEST,FETCH_SUCCESS,FETCH_FAILURE} from '../Constant/constant';
const initialState= {
    FETCH_REQUIEST
}
export const signReducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_REQUIEST : return state
        case FETCH_SUCCESS : return state
        case FETCH_FAILURE : return state
        
        default : return state

    }

    
}