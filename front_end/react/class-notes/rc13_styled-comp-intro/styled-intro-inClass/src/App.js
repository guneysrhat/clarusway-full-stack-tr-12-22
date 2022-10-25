import { TomatoButton } from "./components/Button.styled";
import { Button } from "./components/Button.styled";

const App = () => {
  return (
    <>
      <Button primary>Save</Button>
      <Button>Click</Button>
      <TomatoButton>Send</TomatoButton>
      <TomatoButton primary>Submit</TomatoButton>
    </>
  );
};

export default App;
