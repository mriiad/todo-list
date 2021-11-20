import { Navigate, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import NewItem from "./components/NewItem";
import TodoList from "./pages/TodoList";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" exact element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/todolist/new-item" element={<NewItem />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
