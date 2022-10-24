import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ReactImg from "../assets/react.svg";

const Header = () => {
  return (
    <Container>
      <Image src={ReactImg} width="250px"></Image>
    </Container>
  );
};

export default Header;
