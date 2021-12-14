export const initialList = { content: [], isNoData: false, isAdding: false };
export const todoReducer = (state, action) => {
	switch (action.type) {
		case 'INIT': {
			return { content: action.payload };
		}
		case 'ADD_ITEM':
			return {
				content: [
					...state.content,
					{
						id: action.payload.contentId,
						content: action.payload.contentText,
					},
				],
			};
		case 'DELETE_ITEM':
			return {
				content: state.content.filter(
					(content) => content.id !== action.payload
				),
			};
		case 'NO_DATA':
			return {
				...state,
				isNoData: action.payload.isNoData,
			};
		case 'IS_ADDING':
			return {
				...state,
				isAdding: action.payload.isAdding,
			};
		default:
			return { initialList };
	}
};
