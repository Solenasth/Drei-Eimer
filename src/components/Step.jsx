import React, { useState } from "react";
import styled from "styled-components";
import ActionCard from "./ActionCard.jsx";

const ActionList = styled.div`
  display: flex;
`;

function Step(props) {
  const { action, state, payload } = props;
  return (
    <ActionList>
      <ActionCard action={action} payload={payload} state={state} />
    </ActionList>
  );
}

export default Step;
