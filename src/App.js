import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NewItem from "./components/NewItem";
import Accueil from "./pages/Accueil";
import TodoList from "./pages/TodoList";
function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/todolist/new-item" element={<NewItem />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
