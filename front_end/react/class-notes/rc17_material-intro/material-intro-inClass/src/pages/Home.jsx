import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import CardGrid from "../components/CardGrid";
import AppbarComp from "../components/AppbarComp";

const Home = () => {
  return (
    <>
      <AppbarComp />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
    </>
  );
};

export default Home;
