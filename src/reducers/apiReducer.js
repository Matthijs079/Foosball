const defaultState = {
	gamecount: 0,
	orangecount: 0,
	whitecount: 0
  };

export default function userReducer(state = defaultState, action){
	switch (action.type) {
		case 'UPDATE_API':
			return {
				...state,
				gamecount: action.payload.count
			}

		case 'ORANGE_COUNT':
			return {
				...state,
				orangecount: action.payload.orange
			}

		case 'WHITE_COUNT':
			return {
				...state,
				whitecount: action.payload.orange
			}

		default:
			return state;
	}
}