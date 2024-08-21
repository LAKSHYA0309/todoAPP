import { useState } from 'react';
import './Todo.css'; // Assuming you have your CSS file already

const Todo = () => {
  const [task, setTask] = useState(["walking", "sleeping", "writing"]);
  const [newtask, setNewtask] = useState("");

  function handleinputchange(event) {
    setNewtask(event.target.value);
  }

  function addtask() {
    if (newtask.trim() !== "") {
      setTask((t) => [...t, newtask]);
      setNewtask("");
    }
  }

  function deletetask(index) {
    setTask((t) => t.filter((_, i) => i !== index));
  }

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>TODO LIST APP</h1>
        <div>
          <input
            type="text"
            placeholder="Type a new task"
            onChange={handleinputchange}
            value={newtask}
          />
          <button onClick={addtask}>Add</button>
        </div>
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => deletetask(index)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
      {/* Video Section */}
      <div className="video-container">
        <video className="fullscreen-video" controls autoPlay muted loop>
          <source src="/je.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Todo;
