
const defaultState = {
	userone: [],
	usertwo: [],
	userthree: [],
	userfour: [],
  };

export default function userReducer(state = defaultState, action){
	switch (action.type) {
		case 'UPDATE_USERONE':
			return {
				...state,
				userone: action.payload.userone
			 };

		case 'UPDATE_USERTWO':
			return {
				...state,
				usertwo: action.payload.usertwo
			};

		 case 'UPDATE_USERTHREE':
			return {
				...state,
				userthree: action.payload.userthree
			};

		 case 'UPDATE_USERFOUR':
			return {
				...state,
				userfour: action.payload.userfour
			};

		default:
			return state;
	}
}