import React from "react";
import styled from "styled-components";
import FlightImage from "../flightimage/flightimage.component";
import FlightDetails from "../flightdetails/flightdetails.component";

const CardContainer = styled.div`
width: 18vw;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
background-color:white;
border-radius:6px;
height:450px;
margin-top:10px;
}
`;
const FlightCard = ({ flight }) => {
  return (
    <CardContainer>
      <FlightImage imgLink={flight.links.mission_patch_small} />
      <FlightDetails
        name={flight.mission_name}
        flightNumber={flight.flight_number}
        missionId={flight.mission_id}
        year={flight.launch_year}
        launchSuccess={flight.launch_success}
      />
    </CardContainer>
  );
};

export default FlightCard;
