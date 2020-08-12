import React from "react";
import styled from "styled-components";
import FilterButton from "../filterbutton/filterbutton.component";
import { filterLand } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const LandButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  width: 80%;
`;
class LandButtons extends React.Component {
  handleClick = (bool) => {
    const { SelectedYear, SelectedLaunch } = this.props;
    let FilterUrl = "";
    FilterUrl = `${
      SelectedYear
        ? FilterUrl.concat(`&year=${SelectedYear}`)
        : FilterUrl.concat("")
    }`;
    FilterUrl = `${
      SelectedLaunch
        ? FilterUrl.concat(`&launch=${SelectedLaunch}`)
        : FilterUrl.concat("")
    }`;
    if (this.props.SelectedLand != bool) {
      this.props.filterLand(bool);
      this.props.history.push(`/filter?land=${bool}`.concat(FilterUrl));
    } else {
      this.props.filterLand(null);
      if (SelectedYear || SelectedLaunch) {
        this.props.history.push(`/filter?${FilterUrl}`);
      } else {
        this.props.history.push(`/`);
      }
    }
  };
  render() {
    return (
      <LandButtonsContainer>
        <FilterButton
          active={this.props.SelectedLand === "true"}
          placeholder={"true"}
          onClick={this.handleClick}
        />
        <FilterButton
          active={this.props.SelectedLand === "False"}
          placeholder={"False"}
          onClick={this.handleClick}
        />
      </LandButtonsContainer>
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
  connect(mapStateToProps, { filterLand })(LandButtons)
);
