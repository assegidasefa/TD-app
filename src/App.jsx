import { useState } from "react";
// import "./App.css";
import { Watermark } from "antd";
import { FaTrashAlt } from 'react-icons/fa';

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoTask = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo(""); // Clear input field after adding
    }
  };

  const toggleCompleteTask = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    const completed = updatedTodos.filter(todo => todo.completed);
    setCompletedTodos(completed);
  };

  const removeTodoTask = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  const removeCompletedTask = (index) => {
    setCompletedTodos(completedTodos.filter((_, idx) => idx !== index));
  };

  return (
    // <Watermark content="Assegid Assefa" className="p-5">
    <div className="flex flex-col justify-start items-start h-screen w-full p-2">
      <div className="w-1/2 flex justify-between gap-4 mb-4">
        <input
          className="bg-gray-500 h-full w-full rounded-md border-gray-900 px-3 text-3xl"
          placeholder="Please add your todo task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodoTask} className="bg-blue-500 p-5 rounded-lg px-9">ADD</button>
      </div>
      <div className="flex w-full justify-between gap-4 p-2 h-full">
        <div className="flex flex-col justify-start border-t-2 border-1 rounded-md pt-3 w-1/2 bg-gray-400 h-full">
          <h2 className="font-bold pb-3">Todos</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border">Title</th>
                <th className="border">Is Completed</th>
                <th className="border">Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={index}>
                  <td className="border px-3">
                    <span
                      style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleCompleteTask(index)}
                    >
                      {todo.text}
                    </span>
                  </td>
                  <td className="border text-center">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleCompleteTask(index)}
                    />
                  </td>
                  <td className="border text-center">
                    <button onClick={() => removeTodoTask(index)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col justify-start border-t-2 border-1 rounded-md items-center pt-3 w-1/2 bg-gray-400 h-full">
          <h2 className="font-bold">Completed Tasks</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border">Title</th>
                <th className="border">Action</th>
              </tr>
            </thead>
            <tbody>
              {completedTodos.map((todo, index) => (
                <tr key={index}>
                  <td className="border px-3">{todo.text}</td>
                  <td className="border text-center">
                    <button onClick={() => removeCompletedTask(index)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </Watermark>
  );
}

export default App;
