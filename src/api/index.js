import axios from "axios";

export const fetchLaunchesAPI = () => {
  return axios.get(`https://api.spaceXdata.com/v3/launches?limit=100`);
};

export const fetchFilteredLaunchesAPI = ({ year, launch, land }) => {
  let FilterUrl = "";
  FilterUrl = `${
    launch
      ? FilterUrl.concat(`&launch_success=${launch}`)
      : FilterUrl.concat("")
  }`;
  FilterUrl = `${
    year ? FilterUrl.concat(`&launch_year=${year}`) : FilterUrl.concat("")
  }`;
  FilterUrl = `${
    land ? FilterUrl.concat(`&land_success=${land}`) : FilterUrl.concat("")
  }`;
  return axios.get(
    `https://api.spaceXdata.com/v3/launches?limit=100${FilterUrl}`
  );
};
