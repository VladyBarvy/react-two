import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, deleteTask, toggleTaskStatus, updateTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
