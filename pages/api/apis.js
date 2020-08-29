const baseUrl = "https://api.spaceXdata.com/v3/launches?limit=100";

const fetchAllPrograms = async () => {
  return await fetch(baseUrl).then((res) => res.json());
};

const filterPrograms = async (data) => {
  const url = baseUrl.concat(buildQueryString(data));

  return await fetch(url).then((res) => res.json());
};

const buildQueryString = (data) => {
  let queryString = "&";
  let params = [];
  for (let key in data) {
    const value = data[key];
    if (value !== "") params.push(`${key}=${value}`);
  }
  queryString = queryString.concat(params.join("&"));
  return queryString;
};

export { fetchAllPrograms, filterPrograms };
