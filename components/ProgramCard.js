import React from "react";
import { Card, Image } from "semantic-ui-react";

const ProgramCard = ({
  flight_number,
  mission_name,
  mission_id,
  launch_year,
  links,
  rocket,
  launch_success,
}) => {
  // "links.mission_patch" is an image link, which is not available

  const landSuccess = rocket.first_stage.cores[0].land_success;

  return (
    <div className="col-sm-12 col-md-6 col-lg-3 program-card">
      <Card>
        <Image src={"spacex.jpg"} ui={false} />
        <Card.Content>
          <Card.Header>
            {mission_name} #{flight_number}
          </Card.Header>
          <Card.Description>
            <label className="program-info">
              <span>Mission Ids:</span>
              <ul>
                {mission_id && mission_id.length > 0 ? (
                  mission_id.map((id) => <li key={id}>{id}</li>)
                ) : (
                  <li>{`{mission_id}`}</li>
                )}
              </ul>
            </label>
            <label className="program-info">
              <span>Launch Year:</span> {launch_year}
            </label>
            <label className="program-info">
              <span>Successful Launch:</span>{" "}
              {`${
                launch_success !== null ? launch_success : "{launch_success}"
              }`}
            </label>
            <label className="program-info">
              <span>Successful Landing:</span>{" "}
              {`${landSuccess !== null ? landSuccess : "{land_success}"}`}
            </label>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProgramCard;
