import React from "react";
import styled from "styled-components";

const Buttons = styled.div``;
const Button = styled.button`
  margin: 1em;
  padding: 1em;
  background-color: transparent;
  color: white;
  font-family: "Montserrat";
  font-size: 1.2em;
  border-radius: 3em;
  border-style: solid;
  border-color: transparent;
  background: #43cea2; /* fallback for old browsers */
  background-image: linear-gradient(
    to right,
    #eb3349 0%,
    #f45c43 51%,
    #eb3349 100%
  );
  box-shadow: 2px 1000px 1px #1b1b1b inset;
  background-size: 200% 200%;
  background-origin: border-box;
  &:hover {
    box-shadow: none;
    color: white;
  }
`;

function MainButtons() {
  return (
    <Buttons>
      <Button>Try the challange!</Button>
      <Button>Tell me the awnser!</Button>
      <Button>Customize </Button>
    </Buttons>
  );
}

export default MainButtons;
