import React from "react";
import styled from "styled-components";
import YearFilter from "../yearfilter/yearfilter.component";
import LaunchFilter from "../launchfilter/launchfilter.component";
import LandingFilter from "../landingfilter/landingfilter.component";

const FilterContainer = styled.div`
  z-index: 50;
  width: 16rem;
`;

const FilterComponent = styled.div`
  border-radius: 6px;
  margin: 10px;
  background-color: white;
  margin: 5px 10px;
`;

const FilterHeading = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 6px;
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
