import styled from "styled-components";

export const Button = styled.button`
  /* background-color: hotpink; */
  /* color: white; */
  background-color: ${(props) => (props.primary ? "white" : "purple")};
  /* color: ${(props) => (props.primary ? "purple" : "white")}; */
  color: ${({ primary }) => (primary ? "purple" : "white")};

  cursor: pointer;
  width: 7rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: 1px solid purple;
  font-size: 1.1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  &:hover {
    transform: scale(0.97);
  }
`;

export const TomatoButton = styled(Button)`
  background-color: ${({ primary }) => (primary ? "white" : "tomato")};
  color: ${({ primary }) => (primary ? "tomato" : "white")};
  border: 1px solid tomato;
`;
