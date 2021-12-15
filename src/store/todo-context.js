import React, { useReducer } from 'react';
import { initialList, todoReducer } from '../components/reducer/todo-reducer';

const TodoContext = React.createContext();

export const TodoContextProvider = (props) => {
	const [todoState, dispatchTodo] = useReducer(todoReducer, initialList);

	return (
		<TodoContext.Provider value={[todoState, dispatchTodo]}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContext;
