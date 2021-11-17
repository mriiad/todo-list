import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
