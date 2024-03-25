const initialState = {
	money: 1000,
	text: 'Hello I am Redux',
	todo: []
}

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_MONEY':
			return { ...state, money: state.money + action.payload }
		case 'GET_MONEY':
			return { ...state, money: state.money - action.payload }
		case 'ADD_USER':
			return { ...state ,todo: [...state.todo, action.payload]}
		default:
			return state
	}
}
