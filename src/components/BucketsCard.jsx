import React from "react";
import styled from "styled-components";
import resources from "../database/resources";
import BucketsCapacity from "../database/buckets";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #43cea2; /* fallback for old browsers */
  background-image: linear-gradient(
    to top,
    #eb3349 0%,
    #f45c43 51%,
    #eb3349 100%
  );
  box-shadow: 2px 1000px 1px white inset;
  background-size: 200% 200%;
  background-origin: border-box;
  width: 10em;
  margin: 1em;
  padding: 0em;
  border-radius: 1em;
  border-style: solid;
  border-color: transparent;
`;
const Data = styled.div`
  font-size: 1em;
  text-align: center;
  margin: 0.1em;
`;

const BucketIcon = styled.img`
  width: 1.5em;
`;

const DataPiece = styled.p`
  display: flex;
  align-content: center;
  align-items: center;
`;
const DataPiece_C = styled(DataPiece)`
  border-top: 0.05em solid;
  padding-top: 0.5em;
`;

const IconTag = styled.span`
  margin-top: 0.2em;
  font-size: 1em;
`;
function BucketCard(props) {
  const { state } = props;
  return (
    <Card>
      <Data>
        <DataPiece>
          <BucketIcon src={resources.icon_full} />
          <IconTag>
            {" "}
            A: {state.a} / {BucketsCapacity.a}
          </IconTag>
        </DataPiece>
        <DataPiece>
          <BucketIcon src={resources.icon_full} />
          <IconTag>
            B: {state.b} / {BucketsCapacity.b}
          </IconTag>
        </DataPiece>
        <DataPiece_C>
          <BucketIcon src={resources.icon_full} />
          <IconTag>
            C: {state.c} / {BucketsCapacity.c}
          </IconTag>
        </DataPiece_C>
      </Data>
    </Card>
  );
}

export default BucketCard;
