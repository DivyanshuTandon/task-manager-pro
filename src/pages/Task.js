import React, { useState, useEffect } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  // Load tasks from local storage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to local storage whenever they change
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
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Your Tasks</h2>

      {/* Task Creation Input */}
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

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-between items-center space-x-4 p-2 rounded-lg ${
              task.completed ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="w-5 h-5"
              />
              <span className={task.completed ? "line-through text-gray-500" : ""}>
                {task.text}
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
