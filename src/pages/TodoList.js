import { useEffect, useReducer, useState } from 'react';
import Loader from 'react-loader-spinner';
import NewItem from '../components/NewItem';
import { initialList, todoReducer } from '../components/reducer/todo-reducer';
import TodoItem from '../components/TodoItem';
import { TODO_DATA } from '../utils/data.js';
import { uid } from '../utils/uid';
import classes from './TodoList.module.css';

function TodoList() {
	const [todoState, dispatchTodo] = useReducer(todoReducer, initialList);
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
				dispatchTodo({ type: 'INIT', payload: responseData });
			})
			.catch(() => {
				isLoading(false);
				dispatchTodo({ type: 'INIT', payload: TODO_DATA });
			});
	};

	const addNewTodoItem = (enteredText) => {
		dispatchTodo({
			type: 'ADD_ITEM',
			payload: { contentText: enteredText, contentId: uid() },
		});
	};

	const deleteTodoItem = (id) => {
		dispatchTodo({ type: 'DELETE_ITEM', payload: id });
	};

	return (
		<div className={classes.todoList}>
			<NewItem addNewTodo={addNewTodoItem} />
			<div
				className={
					todoState.content.length > 0 ? classes.todoItems : ''
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
					todoState.content.map((todoItem) => (
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
	);
}

export default TodoList;
