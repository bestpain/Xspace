import React from "react";
import styled from "styled-components";
import YearFilter from "../yearfilter/yearfilter.component";
import LaunchFilter from "../launchfilter/launchfilter.component";
import LandingFilter from "../landingfilter/landingfilter.component";

const FilterContainer = styled.div`
  width: 240px;
  min-width: 240px;
  background-color: #f1f1ff1;
`;

const FilterComponent = styled.div`
  width: 220px;
  min-width: 220px;
  background-color: white;
  height: 80%;
  border-radius: 6px;
  display:flex;
  flex-direction:column;
  margin:10px;
  position: fixed;
`;

const FilterHeading = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding:6px;
`;

//SideBar filter component
const Filter = () => {
  return (
    <FilterContainer>
      <FilterComponent>
        <FilterHeading>Filters</FilterHeading>
        <YearFilter />
        <LaunchFilter />
        <LandingFilter />
      </FilterComponent>
    </FilterContainer>
  );
};

export default Filter;
