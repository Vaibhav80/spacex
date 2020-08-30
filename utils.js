const getYears = () => {
  const currentYear = new Date().getFullYear();
  let years = [];
  for (let i = 2006; i <= currentYear; i++) {
    years.push(i);
  }
  return years;
};

const status = ["True", "False"];

const LAUNCH_YEAR = "launch_year";
const LAUNCH_SUCCESS = "launch_success";
const LAND_SUCCESS = "land_success";

export { getYears, status, LAUNCH_SUCCESS, LAUNCH_YEAR, LAND_SUCCESS };
