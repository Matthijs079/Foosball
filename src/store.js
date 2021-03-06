import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import apiReducer from './reducers/apiReducer';

const rootReducer = combineReducers({
	userReducer,
	apiReducer
})

const store = createStore( 
	rootReducer, 
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;