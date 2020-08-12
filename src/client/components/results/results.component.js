import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import FlightCard from "../../components/flightcard/flightcard.component";
import Spinner from "../loading-spinner/spinner.component";

const ResultContainer = styled.div`
  display: flex;
  background-color: #f1f1f1;
  height: max-content;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

//this displays all the data fetched from API
class Results extends React.Component {
  renderRockets = () => {
    return this.props.Launches.map((data, i) => (
      <FlightCard flight={data} key={i} />
    ));
  };
  render() {
    return (
      <ResultContainer>
        {this.props.Launches.length ? this.renderRockets() : <Spinner />}
      </ResultContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return { Launches: state.Launches };
};

export default connect(mapStateToProps)(Results);
