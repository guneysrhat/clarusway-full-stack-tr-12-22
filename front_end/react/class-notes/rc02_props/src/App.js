import React from "react";
// import Msg from "./components/Msg";
import Person from "./components/Person";
import data from "./data";

function App() {
  return (
    <div>
      {data.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          img={person.img}
          tel={person.tel}
        />
      ))}
    </div>
  );
}

export default App;
