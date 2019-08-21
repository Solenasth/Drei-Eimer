import React from "react";
import styled from "styled-components";
import ACTIONS from "../database/validActions";

const Card = styled.div`
  background-color: white;
  width: 10em;
  margin: 1em;
  padding: 1.5em;
  border-radius: 1em;
`;

const Title = styled.h1`
  text-align: center;
  padding-bottom: 0.5em;
  border-bottom: 0.01em solid;
`;

function ActionCard(props) {
  const { action, state, payload } = props;

  return (
    <Card>
      <Title>{action}</Title>
      {payload.origin ? <p>From: {payload.origin}</p> : null}
      {payload.target ? <p>To: {payload.target}</p> : null}
      <p>
        A: {state.a} B: {state.b} C: {state.c}
      </p>
    </Card>
  );
}

export default ActionCard;
