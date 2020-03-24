import { getActionStates } from '../Utils/reduxUtility'; 
import { networkRequest } from '../APICall/index';
import { LOGIN, VERIFY,FORGET_PASSWORD_OTP, FORGET_PASSWORD_OTP_VERIFY, FORGET_PASSWORD, REGISTER } from './ActionNames';

export const loginSuccess= (data)=>{
	return{ 
		type: getActionStates(LOGIN).success,
		data
	}
}

export const loginErrored = (error)=>{
	return{ 
		type: getActionStates(LOGIN).failure,
		error
	}
}

export const loginLoading = (isLoading)=>{
	return{
		type: getActionStates(LOGIN).inProgress,
		isLoading
	}
}

export const getLogin = (params)=>{
	const url = 'login'
	return dispatch => networkRequest.post(dispatch, url, params, loginSuccess, loginLoading, loginErrored );
}

export const forgetPasswordOtpSuccess= (data)=>{
	return{ 
		type: getActionStates(FORGET_PASSWORD_OTP).success,
		data
	}
}

export const forgetPasswordOtpErrored = (error)=>{
	return{ 
		type: getActionStates(FORGET_PASSWORD_OTP).failure,
		error
	}
}

export const forgetPasswordOtpLoading = (isLoading)=>{
	return{
		type: getActionStates(FORGET_PASSWORD_OTP).inProgress,
		isLoading
	}
}

export const getForgetPasswordOtp = (params)=>{
	const url = 'forgetPasswordOtp'
	return dispatch => networkRequest.patch(dispatch, url, params, forgetPasswordOtpSuccess, forgetPasswordOtpLoading, forgetPasswordOtpErrored );
}

export const forgetPasswordOTPVerifySuccess= (data)=>{
	return{ 
		type: getActionStates(FORGET_PASSWORD_OTP_VERIFY).success,
		data
	}
}

export const forgetPasswordOTPVerifyErrored = (error)=>{
	return{ 
		type: getActionStates(FORGET_PASSWORD_OTP_VERIFY).failure,
		error
	}
}

export const forgetPasswordOTPVerifyLoading = (isLoading)=>{
	return{
		type: getActionStates(FORGET_PASSWORD_OTP_VERIFY).inProgress,
		isLoading
	}
}

export const getForgetPasswordOTPVerify = (params)=>{
	const url = 'verifyForgetPasswordOtp';
	return dispatch => networkRequest.patch(dispatch, url, params, forgetPasswordOTPVerifySuccess, forgetPasswordOTPVerifyLoading, forgetPasswordOTPVerifyErrored);
}

export const forgetPasswordSuccess= (data)=>{
	return{ 
		type: getActionStates(FORGET_PASSWORD).success,
		data
	}
}

export const forgetPasswordErrored = (error)=>{
	return{ 
		type: getActionStates(FORGET_PASSWORD).failure,
		error
	}
}

export const forgetPasswordLoading = (isLoading)=>{
	return{
		type: getActionStates(FORGET_PASSWORD).inProgress,
		isLoading
	}
}

export const getForgetPassword = (params)=>{
	const url = 'verifyForgetPasswordOtp';
	return dispatch => networkRequest.patch(dispatch, url, params, forgetPasswordSuccess, forgetPasswordLoading, forgetPasswordErrored);
}

export const registerSuccess= (data)=>{
	return{ 
		type: getActionStates(REGISTER).success,
		data
	}
}

export const registerErrored = (error)=>{
	return{ 
		type: getActionStates(REGISTER).failure,
		error
	}
}

export const registerLoading = (isLoading)=>{
	return{
		type: getActionStates(REGISTER).inProgress,
		isLoading
	}
}

export const getRegister = (params)=>{
	const url = 'register';
	return dispatch => networkRequest.post(dispatch, url, params, registerSuccess, registerLoading, registerErrored);
}

export const verifySuccess= (data)=>{
	return{ 
		type: getActionStates(VERIFY).success,
		data
	}
}

export const verifyErrored = (error)=>{
	return{ 
		type: getActionStates(VERIFY).failure,
		error
	}
}

export const verifyLoading = (isLoading)=>{
	return{
		type: getActionStates(VERIFY).inProgress,
		isLoading
	}
}

export const getVerify = (params)=>{
	const url = 'verify';
	return dispatch => networkRequest.patch(dispatch, url, params, verifySuccess, verifyLoading, verifyErrored);
}