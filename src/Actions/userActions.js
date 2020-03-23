import { getActionStates } from '../Utils/reduxUtility'; 
import { networkRequest } from '../APICall/index';
import { LOGIN } from './ActionNames';

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
