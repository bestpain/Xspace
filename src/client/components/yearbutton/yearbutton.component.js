import React from "react";
import styled from "styled-components";
import FilterButton from "../filterbutton/filterbutton.component";
import { filterYear } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Years from "../../../helpers/years";

const YearButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  width: 80%;
`;
class YearButtons extends React.Component {
  handleClick = (year) => {
    const { SelectedLaunch, SelectedLand } = this.props;
    let FilterUrl = "";
    FilterUrl = `${
      SelectedLaunch
        ? FilterUrl.concat(`&launch=${SelectedLaunch}`)
        : FilterUrl.concat("")
    }`;
    FilterUrl = `${
      SelectedLand
        ? FilterUrl.concat(`&land=${SelectedLand}`)
        : FilterUrl.concat("")
    }`;
    if (this.props.SelectedYear != year) {
      this.props.filterYear(year);
      this.props.history.push(`/filter?year=${year}`.concat(FilterUrl));
    } else {
      this.props.filterYear(null);
      if (SelectedLaunch || SelectedLand) {
        this.props.history.push(`/filter?${FilterUrl}`);
      } else {
        this.props.history.push(`/`);
      }
    }
  };

  renderButtons = () => {
    return Years.map((year, index) => (
      <FilterButton
        placeholder={year}
        onClick={this.handleClick}
        active={this.props.SelectedYear === year}
        key={index}
      />
    ));
  };
  render() {
    return <YearButtonsContainer>{this.renderButtons()}</YearButtonsContainer>;
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
  connect(mapStateToProps, { filterYear })(YearButtons)
);
