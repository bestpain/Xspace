import React from "react";
import styled from "styled-components";
import LandButtons from '../landbuttons/landbuttons.component'

const LandingFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingSuccessHeading = styled.span`
  font-size: 15px;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: darkgray;
  width:60%
`;
const LandingFilter = () => {
  return (
    <LandingFilterContainer>
      <LandingSuccessHeading>Successful Landing</LandingSuccessHeading>
      <LandButtons/>
    </LandingFilterContainer>
  );
};

export default LandingFilter;
