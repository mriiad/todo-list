import React, { useState } from 'react';

const TodoContext = React.createContext({
	isLoggedIn: false,
	onAdd: () => {},
});

export const TodoContextProvider = (props) => {
	const [isNoData, setIsNoData] = useState(false);

	const onAddClickHandler = (enteredText) => {
		if (enteredText === '') {
			setIsNoData(true);
		}
	};

	return (
		<TodoContext.Provider
			value={{
				isNoData: isNoData,
				onAdd: onAddClickHandler,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContext;
