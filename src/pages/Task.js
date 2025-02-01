import React, { useState, useEffect } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, { id: Date.now(), text: newTask, completed: false }];
      setTasks(updatedTasks);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Your Tasks</h2>

      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="w-full p-2 border rounded-lg"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </div>

      {tasks.map((task) => (
        <div key={task.id} className={`flex justify-between p-2 mb-2 rounded-lg ${task.completed ? "bg-green-100" : "bg-gray-100"}`}>
          <span className={task.completed ? "line-through text-gray-500" : ""}>
            {task.text}
          </span>
          <div className="space-x-2">
            <button onClick={() => toggleTaskCompletion(task.id)} className="bg-yellow-500 text-white px-3 py-1 rounded-lg">
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
