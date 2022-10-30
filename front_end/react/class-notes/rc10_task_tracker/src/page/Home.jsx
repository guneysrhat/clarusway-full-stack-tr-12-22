import React, { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import axios from "axios";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [task, setTask] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Add Task");
  const url = "https://63518223dfe45bbd55c21f98.mockapi.io/api/tasks";

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Add Task" : "Hide Add Task";
    setText(buttonText);
  };

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
      <Button
        className="bg-danger"
        onClick={() => {
          toggle();
        }}
      >
        {text}
      </Button>
      {isOpen && <AddTask getTask={getTask} />}

      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
