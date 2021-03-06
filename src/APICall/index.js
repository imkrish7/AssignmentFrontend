import axios from 'axios';

const defaultUrl = 'http://127.0.0.1:3333';
let headers = {
	'Content-Type': 'application/json',
	'Authorization': 'Bearer ' + localStorage.getItem('Authorization')
}


export const networkRequest = { post: (dispatch, url, params, successAction, loadingAction, errorAction) => {
				const apiUrl = defaultUrl + '/' + url;

				if (dispatch && loadingAction) dispatch(loadingAction(true));

				const reqObj = { method: 'POST', url: apiUrl, data: JSON.stringify(params), headers };
				axios(reqObj)
					.then(result => {
						if (dispatch && loadingAction) dispatch(loadingAction(false));

						if (dispatch && successAction) {
							dispatch(successAction(result.data));
						}
					})
					.catch(error => {
						if (dispatch && errorAction) {
							dispatch(errorAction(error.response.data));
						}
					});
			},
			 patch: (dispatch, url, params, successAction, loadingAction, errorAction) => {
				const apiUrl = defaultUrl + '/' + url;

				if (dispatch && loadingAction) dispatch(loadingAction(true));
				const reqObj = { method: 'PATCH', url: apiUrl, data: JSON.stringify(params), headers };
				axios(reqObj)
					.then(result => {
						if (dispatch && loadingAction) dispatch(loadingAction(false));

						if (dispatch && successAction) {
							dispatch(successAction(result.data));
						}
					})
					.catch(error => {
						if (dispatch && errorAction) {
							dispatch(errorAction(error.response.data));
						}
					});
			} 
		
		};