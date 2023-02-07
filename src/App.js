import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";
import React, { useState } from "react";
import "./styles.css";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((exitingTasks) => {
      return exitingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <ul className="lista">
        <div className="container">
          <TaskList
            title="Pendente"
            onAddTask={addTask}
            taskState="Pendente"
            tasks={tasks.filter((t) => t.state === "Pendente")}
            onTaskUpdate={updateTask}
            onDeleteTask={deleteTask}
          />
          <TaskList
            title="Fazendo"
            onAddTask={addTask}
            taskState="Fazendo"
            tasks={tasks.filter((t) => t.state === "Fazendo")}
            onTaskUpdate={updateTask}
            onDeleteTask={deleteTask}
          />
          <TaskList
            title="Completo"
            onAddTask={addTask}
            taskState="Completo"
            tasks={tasks.filter((t) => t.state === "Completo")}
            onTaskUpdate={updateTask}
            onDeleteTask={deleteTask}
          />
        </div>
      </ul>
    </div>
  );
}
