import { OPEN_MODEL 
} from '../Constant/constant';

export const userAction = (openBox) =>{
 
 return ({
  type:OPEN_MODEL,
  payload:openBox
 })
}

