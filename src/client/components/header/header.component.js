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
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
  }

  componentDidMount() {
    if (window != undefined) {
      window.addEventListener("scroll", () => {
        const top = window.scrollY > 0;
        if (top) {
          this.headerRef.current.style.position = "fixed";
        } else {
          this.headerRef.current.style.position = "";
        }
      });
    }
  }

  componentWillUnmount() {
    if (window != undefined) {
      window.removeEventListener("scroll");
    }
  }

  render() {
    return (
      <div
        id="header"
        className="header"
        style={{
          backgroundColor: "#f1f1f1",
          display: "flex",
          minHeight: "45px",
          alignItems: "center",
          width: "100%",
          zIndex: "2",
          transition: "0.25s ",
        }}
        ref={this.headerRef}
      >
        <LogoContainer to="/">SpaceX Launch Programs</LogoContainer>
      </div>
    );
  }
}

export default Header;
