// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from '../slices/authSlice';
import profileReducer from "../slices/profileSlice"
import cartReducer from "../slices/cartSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  cart:cartReducer
});

export default rootReducer;
