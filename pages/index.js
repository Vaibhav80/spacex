import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Programs from "../components/Programs";
import { fetchAllPrograms, filterPrograms } from "./api/apis";
import { Loader, Dimmer } from "semantic-ui-react";
import globalCSS from "../styles/global";

export default function Home() {
  const [programs, setPrograms] = useState([]);
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAllPrograms().then((response) => {
      setLoading(false);
      setPrograms(response);
      setMessage(
        response && response.length === 0 ? "No data found..." : undefined
      );
    });
  }, []);

  const onFilterChange = (data) => {
    setPrograms([]);
    setLoading(true);
    filterPrograms(data).then((response) => {
      setLoading(false);
      setPrograms(response);
      setMessage(
        response && response.length === 0 ? "No data found..." : undefined
      );
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="app-header">SpaceX Launch program</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-3">
          <Filter onFilterChange={onFilterChange} />
        </div>
        <div className="col-sm-12 col-md-8 col-lg-9">
          {loading ? (
            <Dimmer active inverted disabled={!loading} page={loading}>
              <Loader size="huge" content="Fetching data..." />
            </Dimmer>
          ) : (
            <Programs data={programs} />
          )}

          {message && <h1 className="message">{message}</h1>}
        </div>
      </div>
      <style jsx global>
        {globalCSS}
      </style>
    </div>
  );
}
