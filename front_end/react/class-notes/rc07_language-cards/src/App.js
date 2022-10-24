import Container from "react-bootstrap/Container";
import Card from "./component/Card";
import Header from "./component/Header";

const App = () => {
  return (
    <Container
      className="text-center mt-4 p-4"
      
    >
      <Header />
      <Card />
    </Container>
  );
};

export default App;
