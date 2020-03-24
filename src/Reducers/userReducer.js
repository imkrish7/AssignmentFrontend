import { getActionStates, successState, loadingState, errorState } from '../Utils/reduxUtility';
import { LOGIN, REGISTER, VERIFY,FORGET_PASSWORD_OTP, FORGET_PASSWORD_OTP_VERIFY, FORGET_PASSWORD } from '../Actions/ActionNames';


export const loginResponse= (state={}, action)=>{

	switch(action.type){
		case getActionStates(LOGIN).success:
			localStorage.setItem('Authorization', action.data.token.token);
			return { ...successState, data: action.data};
		case getActionStates(LOGIN).inProgress:
			return { ...loadingState, loading: action.isLoading};
		case getActionStates(LOGIN).failure:
			return{ ...errorState, error: action.error};
		default:
			return state;
	}
}

export const forgetPasswordOtpResponse= (state={}, action)=>{

	switch(action.type){
		case getActionStates(FORGET_PASSWORD_OTP).success:
			return { ...successState, data: action.data};
		case getActionStates(FORGET_PASSWORD_OTP).inProgress:
			return { ...loadingState, loading: action.isLoading};
		case getActionStates(FORGET_PASSWORD_OTP).failure:
			return{ ...errorState, error: action.error};
		default:
			return state;
	}
}

export const forgetPasswordOtpVerifyResponse= (state={}, action)=>{

	switch(action.type){
		case getActionStates(FORGET_PASSWORD_OTP_VERIFY).success:
			return { ...successState, data: action.data};
		case getActionStates(FORGET_PASSWORD_OTP_VERIFY).inProgress:
			return { ...loadingState, loading: action.isLoading};
		case getActionStates(FORGET_PASSWORD_OTP_VERIFY).failure:
			return{ ...errorState, error: action.error};
		default:
			return state;
	}
}

export const forgetPasswordResponse= (state={}, action)=>{

	switch(action.type){
		case getActionStates(FORGET_PASSWORD).success:
			return { ...successState, data: action.data};
		case getActionStates(FORGET_PASSWORD).inProgress:
			return { ...loadingState, loading: action.isLoading};
		case getActionStates(FORGET_PASSWORD).failure:
			return{ ...errorState, error: action.error};
		default:
			return state;
	}
}

export const registerResponse= (state={}, action)=>{

	switch(action.type){
		case getActionStates(REGISTER).success:
			return { ...successState, data: action.data};
		case getActionStates(REGISTER).inProgress:
			return { ...loadingState, loading: action.isLoading};
		case getActionStates(REGISTER).failure:
			return{ ...errorState, error: action.error};
		default:
			return state;
	}
}

export const verifyResponse= (state={}, action)=>{

	switch(action.type){
		case getActionStates(VERIFY).success:
			return { ...successState, data: action.data};
		case getActionStates(VERIFY).inProgress:
			return { ...loadingState, loading: action.isLoading};
		case getActionStates(VERIFY).failure:
			return{ ...errorState, error: action.error};
		default:
			return state;
	}
}