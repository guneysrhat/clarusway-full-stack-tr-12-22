import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showImage, setShowImage] = useState(true);
  return (
    <Container
      className="rounded-4 p-4 "
      style={{ background: "peachpuff" }}
      onClick={() => setShowImage(!showImage)}
    >
      {showImage && (
        <Container>
          <Image src={img} width="70%"></Image>
          <h1>{name}</h1>
        </Container>
      )}
      {!showImage && (
        <Container>
          <ul>
            {options.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </Container>
      )}
    </Container>
  );
};

export default Language;
