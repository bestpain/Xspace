import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import FlightCard from "../../components/flightcard/flightcard.component";
import Spinner from "../loading-spinner/spinner.component";

const ContentContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-evenly;
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
      <ContentContainer>
        <ResultContainer>
          {this.props.Launches.length ? this.renderRockets() : <Spinner />}
        </ResultContainer>
      </ContentContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return { Launches: state.Launches };
};

export default connect(mapStateToProps)(Results);
