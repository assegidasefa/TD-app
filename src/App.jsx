import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoTask = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
    }
  };
  return (
    <div>
      <input
        placeholder="please add your todo task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button onClick={addTodoTask}>ADD </button>

      <ul>
        {todos.map((todo, index) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
