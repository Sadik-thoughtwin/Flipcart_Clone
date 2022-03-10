import React from 'react';
import { OPEN_MODEL } from '../Constant/constant';

const userAction = (openBox) =>{
 
 return ({
  type:OPEN_MODEL,
  payload:openBox
 })
}
export default userAction;