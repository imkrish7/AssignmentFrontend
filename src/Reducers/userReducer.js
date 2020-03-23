import { getActionStates, successState, loadingState, errorState } from '../Utils/reduxUtility';
import { LOGIN } from '../Actions/ActionNames';


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