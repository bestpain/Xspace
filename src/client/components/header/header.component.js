import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled(Link)`
  float: left;
  color: black;
  text-align: center;
  text-decoration: none;
  line-height: 25px;
  border-radius: 4px;
  font-size: 25px;
  font-weight: bold;
  margin-left: 10px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;
class Header extends React.Component {
  render() {
    return (
      <div
        id="header"
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          zIndex: "100",
        }}
      >
        <LogoContainer to="/">SpaceX Launch Programs</LogoContainer>
      </div>
    );
  }
}

export default Header;
