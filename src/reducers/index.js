const initialState = {
	books: [],
	loading: true,
	cartItems: [],
	totalOrder: 0,
};
const updateCart = (state, action, amount) => {
	const cartBook = state.books.find(book => book.id === action.payload);
	const searchBook = state.cartItems.find(book => book.id === action.payload);

	if (searchBook) {
		const cartItems = state.cartItems.map(item => {
			if (item.id === searchBook.id) {
				item.count += amount;
				item.price += cartBook.price * amount;
			}
			return item;
		});
		if (searchBook.count === 0) {
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id !== searchBook.id),
			};
		} else {
			return { ...state, cartItems };
		}
	} else {
		const newCartBook = {
			id: cartBook.id,
			title: cartBook.title,
			price: cartBook.price,
			count: 1,
		};
		return {
			...state,
			cartItems: state.cartItems.concat(newCartBook),
		};
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "BOOKS_LOADED":
			return {
				...state,
				books: action.payload,
				loading: false,
			};
		case "BOOKS_ADD_TO_CART":
			return updateCart(state, action, 1);
		/* const cartBook = state.books.find(book => book.id === action.payload);
			const searchBook = state.cartItems.find(
				book => book.id === action.payload
			);
			if (searchBook) {
				return {
					...state,
					cartItems: state.cartItems.map(item => {
						if (item.id === searchBook.id) {
							item.count += 1;
							item.price += cartBook.price;
						}
						return item;
					}),
				};
			} else {
				const newCartBook = {
					id: cartBook.id,
					title: cartBook.title,
					price: cartBook.price,
					count: 1,
				};
				return {
					...state,
					cartItems: state.cartItems.concat(newCartBook),
				}; */

		case "BOOKS_REMOVE_TO_CART":
			updateCart(state, action, -1);
		default:
			return state;
	}
};

export default reducer;
