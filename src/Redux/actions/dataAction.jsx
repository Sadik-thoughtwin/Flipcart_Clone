import { DATADETAILS } from "../Constant/constant"

export const oneItem = (id) =>{
    
    return ({
        type:DATADETAILS,
        payload:id
    })
}
