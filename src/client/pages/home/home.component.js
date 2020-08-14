import React from "react";
import Filter from "../../components/filter/filter.component";
import styled from "styled-components";
import Results from "../../components/results/results.component";
import {
  fetchLaunchesRequest,
  clearFilters,
  clearLaunchesResults,
} from "../../redux/actions";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const ContentContainer = styled.div`
display: grid;
overflow: hidden;
grid-template-columns: auto 1fr;

@media screen and (max-width: 400px) {
  grid-template-rows: auto;
  grid-template-columns: auto;
}
`

//Homepage
class Home extends React.Component {
  componentDidMount() {
    // call the API and clear any redux state if present
    this.props.clearLaunchesResults();
    this.props.clearFilters();
    this.props.fetchLaunchesRequest();
  }

  render() {
    return (
      <>
        <Helmet>
          <title>SpaceX REST API</title>
          <meta
            property="og:title"
            content=" Open Source REST API for rocket, core, capsule, pad, and launch data "
          />
        </Helmet>
        <ContentContainer>
          <Filter />
          <Results />
        </ContentContainer>
      </>
    );
  }
}

export default {
  component: connect(null, {
    fetchLaunchesRequest,
    clearFilters,
    clearLaunchesResults,
  })(Home),
};
