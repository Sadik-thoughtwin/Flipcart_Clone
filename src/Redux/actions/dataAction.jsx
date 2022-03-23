import { INCREMENT,DECREMENT } from "../Constant/constant"
export const increment = (userData) =>{
    
    return ({
        type:INCREMENT,
        payload:userData
    })
}
// const decrement= (userData) =>{
//     return ({
//         type:DECREMENT,
//         payload:userData
//     })
// }