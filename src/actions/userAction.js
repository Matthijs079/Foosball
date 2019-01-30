export const UPDATE_USERONE = 'UPDATE_USERONE';
export const UPDATE_USERTWO = 'UPDATE_USERTWO';
export const UPDATE_USERTHREE = 'UPDATE_USERTHREE';
export const UPDATE_USERFOUR = 'UPDATE_USERFOUR';

export function userOne(newUser) {
	return{
		type: UPDATE_USERONE,
		payload: {
			userone: newUser
		}
	}
}

export function userTwo(newUser) {
	return{
		type: UPDATE_USERTWO,
		payload: {
			usertwo: newUser
		}
	}
}

export function userThree(newUser) {
	return{
		type: UPDATE_USERTHREE,
		payload: {
			userthree: newUser
		}
	}
}

export function userFour(newUser) {
	return{
		type: UPDATE_USERFOUR,
		payload: {
			userfour: newUser
		}
	}
}