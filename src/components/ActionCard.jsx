import React from "react";
import styled from "styled-components";
import ACTIONS from "../database/validActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resources from "../database/resources";

const Card = styled.div`
  background-color: white;
  width: 12em;
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

const Icon = styled.img`
  width: 3em;
`;
const FAIcon = styled(FontAwesomeIcon)`
  height: 1em;
  margin: 0.2em;
  font-size: 2em;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0.1em;
`;
const IconTag = styled.span`
  text-transform: capitalize;
  font-weight: bolder;
  margin: 0.1em;
`;

function ActionCard(props) {
  const { isPreExisting } = props;
  return (
    <Card>
      {isPreExisting ? ExistingActionCard(props) : NewActionCard(props.action)}
    </Card>
  );
}

function ExistingActionCard(data) {
  const { action } = data;
  return (
    <CardData>
      <Title>{action}</Title>
      {action != ACTIONS.END ? ManageIcons(data) : null}
    </CardData>
  );
}

function NewActionCard(action) {
  return (
    <CardData>
      <Title>{action}</Title>
    </CardData>
  );
}

function getIcon(action, bucket, state) {
  let printeable;
  switch (action) {
    case ACTIONS.FILL:
      !bucket
        ? (printeable = resources.icon_tap)
        : state[bucket] === 0
        ? (printeable = resources.icon_empty)
        : (printeable = resources.icon_full);
      break;
    case ACTIONS.TRANSFER:
      state[bucket] === 0
        ? (printeable = resources.icon_empty)
        : (printeable = resources.icon_full);
      break;
    case ACTIONS.EMPTY:
      !bucket
        ? (printeable = resources.icon_semi)
        : (printeable = resources.icon_trash);
      break;
  }
  return printeable;
}

function ManageIcons(data) {
  const { action, payload, state } = data;
  return (
    <Icons>
      <IconTag>{payload.origin}</IconTag>
      <Icon src={getIcon(action, payload.origin, state)} />
      <FAIcon icon="arrow-right" />
      <Icon src={getIcon(action, payload.target, state)} />
      <IconTag>{payload.target}</IconTag>
    </Icons>
  );
}

export default ActionCard;
