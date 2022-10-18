import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  //? CRUD: (GET-READ)
  const getTutorials = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  //? didmount
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutor={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
