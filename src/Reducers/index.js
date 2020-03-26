import { combineReducers } from 'redux';
import { loginResponse, registerResponse, resetPasswordResponse,forgetPasswordOtpResponse, forgetPasswordOtpVerifyResponse, forgetPasswordResponse, verifyResponse, resendOtpResponse } from './userReducer';

const rootReducers = combineReducers({
	loginResponse,
	forgetPasswordOtpResponse,
	forgetPasswordOtpVerifyResponse,
	forgetPasswordResponse,
	registerResponse,
	verifyResponse,
	resendOtpResponse,
	resetPasswordResponse
})

export default rootReducers;