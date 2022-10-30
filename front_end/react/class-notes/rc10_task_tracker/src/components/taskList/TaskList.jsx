import React from "react";
import { AiFillDelete } from "react-icons/ai";

const TaskList = ({ task }) => {
  return (
    <div>
      {task.map((item) => {
        const { date, task, id } = item;
        return (
          <div className="card m-2 p-2">
            <h2 className="text-center">{task}</h2>
            <p>{date}</p>
            <AiFillDelete />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
