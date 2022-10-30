import axios from "axios";
import React, { useState } from "react";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    addTask(newTask);
    setTask("");
    setDate(new Date());
  };
  const addTask = async (newTask) => {
    const url = "https://63518223dfe45bbd55c21f98.mockapi.io/api/tasks";
    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Task title</label>
      <input type="text" id="title" onChange={(e) => setTask(e.target.value)} />
      <label htmlFor="date">Date</label>
      <input type="date" id="date" onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTask;
