import React from "react";
import styled from "styled-components";
import YearButtons from "../yearbutton/yearbutton.component";

const YearFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LaunchYearHeading = styled.span`
  font-size: 15px;
  padding: 3px;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: darkgray;
  width: 40%;
`;
const YearFilter = () => {
  return (
    <YearFilterContainer>
      <LaunchYearHeading>Launch Year</LaunchYearHeading>
      <YearButtons />
    </YearFilterContainer>
  );
};

export default YearFilter;
