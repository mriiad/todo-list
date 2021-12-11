import { Fragment, useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import NewItem from './components/NewItem';
import NoData from './components/NoData';
import TodoList from './pages/TodoList';
import Welcome from './pages/Welcome';
import TodoContext from './store/todo-context';

function App() {
	const todoCtx = useContext(TodoContext);
	return (
		<Fragment>
			{todoCtx.isNoData && <NoData />}
			<MainHeader />
			<main>
				<Routes>
					<Route
						path='/'
						exact
						element={<Navigate replace to='/welcome' />}
					/>
					<Route path='/welcome' element={<Welcome />} />
					<Route path='/todolist' element={<TodoList />} />
					<Route path='/todolist/new-item' element={<NewItem />} />
				</Routes>
			</main>
		</Fragment>
	);
}

export default App;
