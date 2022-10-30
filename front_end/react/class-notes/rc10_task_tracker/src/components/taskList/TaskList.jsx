import axios from "axios";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

const TaskList = ({ task, getTask }) => {
  const url = "https://63518223dfe45bbd55c21f98.mockapi.io/api/tasks";
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      {task.map((item) => {
        const { date, task, id } = item;
        return (
          <div className="card m-2 p-2">
            <h2 className="text-center">{task}</h2>
            <p>{date}</p>
            <AiFillDelete
              onClick={() => {
                deleteTask(id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
