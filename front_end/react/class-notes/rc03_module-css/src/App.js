import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  //JS

  return (
    //JSX

    <>
      {data.map((item) => {
        console.log(item);
        const { id, language, img, btnName } = item; //! destr.
        return <Card language={language} img={img} btn={btnName} />;
      })}
      <Card />
    </>
  );
}

export default App;
