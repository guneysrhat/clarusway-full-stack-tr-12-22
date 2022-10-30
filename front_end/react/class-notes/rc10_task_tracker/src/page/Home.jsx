import React, { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import axios from "axios";

const Home = () => {
  const [task, setTask] = useState([]);
  const [toogle, setToogle] = useState(false);
  const url = "https://63518223dfe45bbd55c21f98.mockapi.io/api/tasks";
  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    console.log(data);
  };
  // const
  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="container">
      <button disabled="disabled"></button>
      <AddTask getTask={getTask} />
      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
