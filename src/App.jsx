import { useState } from "react";
import "./App.css";
import { Watermark } from "antd";

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoTask = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");  // Clear input field after adding
    }
  };

  const toggleCompleteTask = (index) => {
    const todoToToggle = todos[index];
    if (todoToToggle.completed) {
      setTodos(todos.filter((_, idx) => idx !== index));
      setCompletedTodos([...completedTodos, { ...todoToToggle, completed: false }]);
    } else {
      const updatedTodos = todos.map((todo, idx) =>
        idx === index ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    }
  };

  const removeTodoTask = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <Watermark content="Assegid Assefa">

    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border-2 w-1/2 flex justify-between gap-4 mb-4">
        <input
          className="bg-red-600 w-3/4 rounded-md"
          placeholder="Please add your todo task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodoTask}>ADD</button>
      </div>
      <div className="w-1/2">
        <h2>Todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleteTask(index)}
              />
              <span
                style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
              >
                {todo.text}
              </span>
              <button onClick={() => removeTodoTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 mt-4">
        <h2>Completed Tasks</h2>
        <ul>
          {completedTodos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Watermark>

  );
}

export default App;
