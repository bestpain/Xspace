import React from "react";
import styled from "styled-components";

const FlightImageContainer = styled.div`
background-color:#f1f1f1;
height:40%;
margin-top:13px;
display:flex;
flex-direction:column;
align-items:center;
width: 85%;
}
`;

const ImageContainer = styled.img`
  height: 100%;
  width: 90%;
`;
const FlightImage = ({ imgLink }) => {
  return (
    <FlightImageContainer>
      <ImageContainer src={imgLink} />
    </FlightImageContainer>
  );
};

export default FlightImage;
