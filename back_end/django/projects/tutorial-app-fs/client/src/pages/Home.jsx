import axios from "axios"
import { useEffect, useState } from "react"
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const BASE_URL = "http://127.0.0.1:8000/tutorials/";

  const getTutorials = async () => {
    try {
      const { data } = await axios(BASE_URL)
      setTutorials(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(tutorials)
  //? componentDidMount
  useEffect(() => {
    getTutorials()
  }, [])

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  )
}

export default Home
