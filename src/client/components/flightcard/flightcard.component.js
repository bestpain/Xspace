import React from "react";
import styled from "styled-components";
import FlightImage from "../flightimage/flightimage.component";
import FlightDetails from "../flightdetails/flightdetails.component";

const CardContainer = styled.div`
display: flex;
flex-direction: column;
width: 290px;
min-width: 290px;
background: #fff;
border-radius: .28571429rem;
box-shadow: 0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;
height: 420px;
align-items: center;
margin:5px;
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
