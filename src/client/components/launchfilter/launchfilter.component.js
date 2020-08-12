import React from "react";
import styled from "styled-components";
import LaunchButtons from '../launchbuttons/launchbuttons.component'

const LaunchFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LaunchSuccessHeading = styled.span`
  font-size: 15px;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: darkgray;
  width:58%
`;
const LaunchFilter = () => {
  return (
    <LaunchFilterContainer>
      <LaunchSuccessHeading>Successful Launch</LaunchSuccessHeading>
      <LaunchButtons/>
    </LaunchFilterContainer>
  );
};

export default LaunchFilter;
