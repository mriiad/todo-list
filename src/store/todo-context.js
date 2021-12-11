import React, { useState } from 'react';

const TodoContext = React.createContext({
	isLoggedIn: false,
	onAdd: () => {},
	onBackDropHide: () => {},
});

export const TodoContextProvider = (props) => {
	const [isNoData, setIsNoData] = useState(false);

	const onAddClickHandler = (enteredText) => {
		if (enteredText === '') {
			setIsNoData(true);
		}
	};

	const onBackDropHide = () => {
		setIsNoData(false);
	};

	return (
		<TodoContext.Provider
			value={{
				isNoData: isNoData,
				onAdd: onAddClickHandler,
				onBackDropHide: onBackDropHide,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContext;
