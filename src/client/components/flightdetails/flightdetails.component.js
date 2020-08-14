import React from "react";
import styled from "styled-components";

const FlightDetailsContainer = styled.div`
padding: 0 20px;
}
`;

const FlightDetails = styled.p`
  font-size: 18px;
  font-weight: bold;
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
