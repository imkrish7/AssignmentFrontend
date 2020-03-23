import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../Reducers';
import ReduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const initialState = {};

const store = createStore(
	rootReducers,
	{},
	applyMiddleware(thunk, ReduxImmutableStateInvariant())
);

export default store;