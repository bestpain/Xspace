import React, { useEffect } from "react";
import Filter from "../../components/filter/filter.component";
import styled from "styled-components";
import Results from "../../components/results/results.component";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  filterLaunchesRequest,
  clearLaunchesResults,
} from "../../redux/actions";
import { Helmet } from "react-helmet";

const ContentContainer = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: auto 1fr;

  @media screen and (max-width: 400px) {
    grid-template-rows: auto;
    grid-template-columns: auto;
  }
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const FilterResults = (props) => {
  let query = useQuery();
  useEffect(() => {
    props.clearLaunchesResults();
    props.filterLaunchesRequest(
      query.get("year"),
      query.get("launch"),
      query.get("land")
    );
  }, [query.get("year"), query.get("launch"), query.get("land")]);
  return (
    <>
      <Helmet>
        <title>SpaceX Filter</title>
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
};

export default {
  component: connect(null, { filterLaunchesRequest, clearLaunchesResults })(
    FilterResults
  ),
};
