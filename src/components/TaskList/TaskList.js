import React, { useState } from "react";
import "./TaskList.css";
import PropTypes from "prop-types";
import plusIcon from "../../img/plus-icon.svg";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  taskState,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    console.log(taskState);
    onAddTask("nova Tarefa", taskState);
  };

  /*const increment = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };*/

  return (
    <div className="tasklist">
      <div className="title"> Titulo: {title} </div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
      </div>
      {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
      <button className="btn" onClick={addTask}>
        <img src={plusIcon} alt="plus" />
        Adicionar Tarefa
      </button>
    </div>
  );
}

TaskList.prototype = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
