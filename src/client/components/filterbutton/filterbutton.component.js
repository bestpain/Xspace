import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 38%;
  background-color: ${(props) => (props.active ? "#006400" : "#9acd32"  )};
  color: black;
  padding: 7px;
  text-decoration: none;
  margin: 6px 3px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 10px;
  border: none;
`;
const FilterButton = ({ placeholder, onClick, active }) => {
  return (
    <ButtonContainer active={active} onClick={() => onClick(placeholder)}>
      {placeholder}
    </ButtonContainer>
  );
};

export default FilterButton;
