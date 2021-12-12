import React, { useReducer } from 'react';
import { initialList, todoReducer } from '../components/reducer/todo-reducer';

const TodoContext = React.createContext();

export const TodoContextProvider = (props) => {
	const [todoState, dispatchTodo] = useReducer(todoReducer, initialList);

	/*const [isNoData, setIsNoData] = useState(false);
	const [isAdding, setIsAdding] = useState(false);
	const [enteredText, setEnteredText] = useState('');

	const onAddClickHandler = (enteredText) => {
		//setIsAdding(false);
		setIsNoData(false);
		setEnteredText(enteredText);
		dispatchTodo({
			type: 'ADD_ITEM',
			payload: { contentText: enteredText, contentId: uid() },
		});
	};

	const onBackDropShow = () => {
		setIsAdding(true);
	};

	const onBackDropHide = () => {
		setIsAdding(false);
	};

	const onNoDataIsAdded = () => {
		setIsNoData(true);
	};*/

	return (
		<TodoContext.Provider value={[todoState, dispatchTodo]}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContext;
