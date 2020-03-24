import { combineReducers } from 'redux';
import { loginResponse, registerResponse, forgetPasswordOtpResponse, forgetPasswordOtpVerifyResponse, forgetPasswordResponse, verifyResponse } from './userReducer';

const rootReducers = combineReducers({
	loginResponse,
	forgetPasswordOtpResponse,
	forgetPasswordOtpVerifyResponse,
	forgetPasswordResponse,
	registerResponse,
	verifyResponse
})

export default rootReducers;