import React from "react";
import styled from "styled-components";
import FilterButton from "../filterbutton/filterbutton.component";
import { filterLaunch } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const LaunchButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  width: 80%;
`;

class LaunchButtons extends React.Component {
  handleClick = (bool) => {
    const { SelectedYear, SelectedLand } = this.props;
    let FilterUrl = "";
    FilterUrl = `${
      SelectedYear
        ? FilterUrl.concat(`&year=${SelectedYear}`)
        : FilterUrl.concat("")
    }`;
    FilterUrl = `${
      SelectedLand
        ? FilterUrl.concat(`&land=${SelectedLand}`)
        : FilterUrl.concat("")
    }`;
    if (this.props.SelectedLaunch != bool) {
      this.props.filterLaunch(bool);
      this.props.history.push(`/filter?launch=${bool}`.concat(FilterUrl));
    } else {
      this.props.filterLaunch(null);
      if (SelectedYear || SelectedLand) {
        this.props.history.push(`/filter?${FilterUrl}`);
      } else {
        this.props.history.push(`/`);
      }
    }
  };
  render() {
    return (
      <LaunchButtonsContainer>
        <FilterButton
          active={this.props.SelectedLaunch === "true"}
          placeholder={"true"}
          onClick={this.handleClick}
        />
        <FilterButton
          active={this.props.SelectedLaunch === "False"}
          placeholder={"False"}
          onClick={this.handleClick}
        />
      </LaunchButtonsContainer>
    );
  }
}

const mapStateToProps = ({ Filters }) => {
  return {
    SelectedYear: Filters.year,
    SelectedLaunch: Filters.launch,
    SelectedLand: Filters.land,
  };
};
export default withRouter(
  connect(mapStateToProps, { filterLaunch })(LaunchButtons)
);
