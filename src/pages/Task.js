import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete React Project", completed: false },
    { id: 2, text: "Write GitHub Readme", completed: false },
    { id: 3, text: "Review PRs", completed: true },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Your Tasks</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center space-x-4 p-2 rounded-lg ${
              task.completed ? "bg-green-100" : "bg-gray-100"
            }`}
          >
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
        ))}
      </div>
    </div>
  );
};

export default Tasks;
