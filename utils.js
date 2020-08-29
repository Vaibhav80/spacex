const getYears = () => {
  const currentYear = new Date().getFullYear();
  let years = [];
  for (let i = 2006; i <= currentYear; i++) {
    years.push(i);
  }
  return years;
};

const status = ["True", "False"];

export { getYears, status };
