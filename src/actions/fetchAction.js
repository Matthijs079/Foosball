import Axios from "axios";
export const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS';
export const CREATE_GAME = 'CREATE_GAME';
export const GAME_COUNT = 'GAME_COUNT';
export const ORANGE_COUNT = 'ORANGE_COUNT';
export const WHITE_COUNT = 'WHITE_COUNT';

export function UpdateApi(post) {
	return (dispatch) => {
		return Axios.post('http://127.0.0.1:5000/start', post)
		.then(response => {
		  // Dispatch a synchronous action
			// to handle data
			dispatch(createBookSuccess(response.data))
		})
		.catch(error => {
		  throw(error);
		});
	};
};

export function createBookSuccess(book) {
	book = JSON.stringify(book)
	return {
	  type: 'UPDATE_API',
		payload: {
			count: book
		}
	}
};

export function CreateGame() {
	return (dispatch) => {
	  return Axios.get('http://localhost:5000/game')
		.then(response => {
		  // Dispatch a synchronous action
		  // to handle data
			dispatch(GameId(response.data))
		})
		.catch(error => {
		  throw(error);
		});
	};
};

export function GameId(book) {
	return {
	  type: 'CREATE_GAME',
		payload: {
			gameid: book
		}
	}
};

// export function OrangeCount() {
// 	return (dispatch) => {
// 	  return Axios.get('http://localhost:5000/orangecount')
// 		.then(response => {
// 		  // Dispatch a synchronous action
// 		  // to handle data
// 			dispatch(OrCount(response.data))
// 		})
// 		.catch(error => {
// 		  throw(error);
// 		});
// 	};
// };

let timer = null;
export const Count = (team) => (dispatch) => {
  clearInterval(timer);
	timer = setInterval(() => dispatch(tick(team)), 500);
}
const tick = (team) => { 
	return (dispatch) => {
	return Axios.post('http://localhost:5000/count', team)
	.then(response => {
	// Dispatch a synchronous action
	// to handle data
	console.log(team.team)
	if (team.team === "Orange"){
		console.log("oranje")
		dispatch(OrCount(response.data))
		dispatch(stop)
	}
	else{
		dispatch(WhCount(response.data))
		dispatch(stop)
	}
})} };
const stop = () => {
  clearInterval(timer);
}

export function OrCount(count) {
	return {
		type: 'ORANGE_COUNT',
		payload: {
			orange: count
		}
	}
};

export function WhCount(count) {
	return {
	  type: 'WHITE_COUNT',
		payload: {
			orange: count
		}
	}
};