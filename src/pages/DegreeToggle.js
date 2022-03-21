import React from "react";

const DegreeToggle = ({updateForecastDegree, degreeType}) => {
  return (
    <div>
      <input
        type="radio"
        name="degree-type"
        className="unitCheck"
        id="celsius"
        value="celsius"
        onChange={updateForecastDegree}
        checked={degreeType === "celsius"}
      />
      <label for="celsius">Celsius</label>

      <input
        type="radio"
        name="degree-type"
        className="unitCheck"
        id="fahrenheit"
        value="imperial"
        // onChange={event => updateForecastDegree(event.target.value)}
        // onChange={props.updateForecastDegree}
        // checked={props.degreeType === "fahrenheit"}
        style={{ marginLeft: 30 }}
      />
      <label for="fahrenheit">Fahrenheit</label>
    </div>
  );
};

export default DegreeToggle;
