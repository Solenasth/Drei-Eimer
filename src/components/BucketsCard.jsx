import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  width: 10em;
  margin: 1em;
  padding: 1.5em;
  border-radius: 1em;
`;
const CardData = styled.div``;

const Title = styled.h1`
  text-align: center;
  padding-bottom: 0.5em;
  border-bottom: 0.01em solid;
`;

function BucketCard(props) {
  return <Card />;
}
