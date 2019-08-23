import React, { useState } from "react";
import styled from "styled-components";
import ACTIONS from "../database/validActions";
import BucketsCapacity from "../database/buckets";

const ActionButton = styled.button`
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
  box-shadow: 2px 1000px 1px white inset;
  color: black;
  background-size: 200% 200%;
  background-origin: border-box;
  &:hover {
    box-shadow: none;
    color: white;
  }
`;
const ActionBuilderCard = styled.div`
  background-color: white;
  width: auto;
  margin: 1em;
  padding: 1.5em;
  border-radius: 1em;
`;

const ActionForm = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Select = styled.select`
  font-size: 1em;
  font-family: "montserrat";
  border-radius: 0.5em;
`;

const Title = styled.h1`
  text-align: center;
  padding-bottom: 0.5em;
  border-bottom: 0.01em solid;
`;
const Tag = styled.p`
  margin: 0.5em;
`;
const Origin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const step = {
  action: ACTIONS.FILL,
  state: {
    a: 0,
    b: 0,
    c: 0
  },
  payload: {
    origin: "a",
    target: "a"
  }
};

function ActionBuilder(props) {
  const [RenderOrigin, SetRenderOrigin] = useState(false);
  const [Steps, SetSteps] = useState([]);

  return (
    <ActionBuilderCard>
      <Title>Make a new step</Title>
      {CreateForm(props, RenderOrigin, SetRenderOrigin, Steps, SetSteps)}
    </ActionBuilderCard>
  );
}

function CreateForm(props, RenderOrigin, SetRenderOrigin, Steps, SetSteps) {
  const { SetFinished, SetCurrentState } = props;
  //======== event handlers ======///
  //event handler for action select
  const selectAction = event => {
    {
      event.target.value === ACTIONS.TRANSFER
        ? SetRenderOrigin(true)
        : SetRenderOrigin(false);
    }
    step.action = event.target.value;
  };
  //event handler for target select
  const selectTarget = event => {
    step.payload.target = event.target.value;
  };
  //event handler for origin select
  const selectOrigin = event => {
    step.payload.origin = event.target.value;
  };
  //event handler for submit step
  const submit = event => {
    switch (step.action) {
      case ACTIONS.FILL:
        fillBucket();
        break;
      case ACTIONS.TRANSFER:
        transferBucket();
        break;
      case ACTIONS.EMPTY:
        emptyBucket();
        break;
    }
    let newState = Object.assign({}, step.state);
    console.log(newState);
    SetCurrentState(newState);
    let newSteps = [...Steps, step];
    SetSteps(newSteps);
    console.log(Steps);

    event.preventDefault();
  };

  return (
    <ActionForm>
      <Tag>Action: </Tag>
      <Select name="Action" id="action" onChange={selectAction}>
        <option value={ACTIONS.FILL}> {ACTIONS.FILL}</option>
        <option value={ACTIONS.TRANSFER}> {ACTIONS.TRANSFER}</option>
        <option value={ACTIONS.EMPTY}> {ACTIONS.EMPTY}</option>
      </Select>
      {RenderOrigin ? (
        <Origin>
          <Tag>Origin: </Tag>
          <Select name="Origin" id="origin" onChange={selectOrigin}>
            <option value="a"> Bucket A</option>
            <option value="b"> Bucket B</option>
            <option value="c"> Bucket C</option>
          </Select>
        </Origin>
      ) : null}

      <Tag>Target: </Tag>
      <Select name="Target" id="target" onChange={selectTarget}>
        <option value="a"> Bucket A</option>
        <option value="b"> Bucket B</option>
        <option value="c"> Bucket C</option>
      </Select>
      <ActionButton onClick={submit}>Submit</ActionButton>
    </ActionForm>
  );
}

function fillBucket() {
  step.state[step.payload.target] = BucketsCapacity[step.payload.target];
}
function transferBucket() {
  if (
    step.state[step.payload.origin] + step.state[step.payload.target] >
    BucketsCapacity[step.payload.target]
  ) {
    step.state[step.payload.origin] -=
      BucketsCapacity[step.payload.target] - step.state[step.payload.target];
    step.state[step.payload.target] = BucketsCapacity[step.payload.target];
  } else {
    step.state[step.payload.target] += step.state[step.payload.origin];
    step.state[step.payload.origin] = 0;
  }
}
function emptyBucket() {
  step.state[step.payload.target] = 0;
}

export default ActionBuilder;
