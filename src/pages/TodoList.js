import { useContext, useEffect, useReducer, useState } from 'react';
import Loader from 'react-loader-spinner';
import NewItem from '../components/NewItem';
import { initialList, todoReducer } from '../components/reducer/todo-reducer';
import TodoItem from '../components/TodoItem';
import TodoContext from '../store/todo-context';
import { TODO_DATA } from '../utils/data.js';
import { uid } from '../utils/uid';
import classes from './TodoList.module.css';

function TodoList() {
	const [state, dispatch] = useContext(TodoContext);
	const [loading, isLoading] = useState(false);

	useEffect(() => {
		fetchTodoData();
	}, []);

	const fetchTodoData = async () => {
		const DATA_URL = 'https://cat-todo-list.herokuapp.com/todos';
		await isLoading(true);

		fetch(DATA_URL)
			.then(async (response) => {
				await isLoading(false);
				return response.json();
			})
			.then((responseData) => {
				dispatch({ type: 'INIT', payload: responseData });
			})
			.catch(() => {
				isLoading(false);
				dispatch({ type: 'INIT', payload: TODO_DATA });
			});
	};

	const deleteTodoItem = (id) => {
		dispatch({ type: 'DELETE_ITEM', payload: id });
	};

	return (
		state.content.length && (
			<div className={classes.todoList}>
				<NewItem />
				<div
					className={
						state.content.length > 0 ? classes.todoItems : ''
					}
				>
					{loading ? (
						<Loader
							type='Oval'
							color='#46909F'
							height={100}
							width={100}
							timeout={3000}
						/>
					) : (
						state.content.map((todoItem) => (
							<TodoItem
								key={todoItem.id}
								id={todoItem.id}
								content={todoItem.content}
								deleteTodoItem={deleteTodoItem}
							/>
						))
					)}
				</div>
			</div>
		)
	);
}

export default TodoList;
