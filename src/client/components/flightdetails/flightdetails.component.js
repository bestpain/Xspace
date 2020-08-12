import React from "react";
import styled from "styled-components";

const FlightDetailsContainer = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 10px 20px;
background-color:white;
}
`;

const FlightDetails = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const FlightDetail = ({
  name,
  flightNumber,
  missionId,
  year,
  launchSuccess,
}) => {
  return (
    <FlightDetailsContainer>
      <FlightDetails
        style={{ color: "blue" }}
      >{`${name}#${flightNumber}`}</FlightDetails>
      <FlightDetails>Mission Ids: {missionId}</FlightDetails>
      <FlightDetails>Launch Year: {year}</FlightDetails>
      <FlightDetails>
        Successful Launch: {launchSuccess ? "true" : "false"}
      </FlightDetails>
    </FlightDetailsContainer>
  );
};

export default FlightDetail;
