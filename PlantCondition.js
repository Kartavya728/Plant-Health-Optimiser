import React, { useState, useEffect } from "react";
import { useNavigate, withRouter } from "react-router-dom";
import PlantConditionInfo from "./PlantConditionInfo";

const PlantCondition = () => {
  const [sensordata, setSensorData] = useState({
    temperature_c: 0,
    temperature_f: 0,
    humidity: 0,
    heat_index_c: 0,
    heat_index_f: 0,
    ldr_value: 0,
    lux: 0,
    distance_cm: 0,
  });

  useEffect(() => {
    const fetchData = () => {
      fetch("/data/sensordata.json")
        .then((response) => response.json())
        .then((updatedData) => setSensorData(updatedData))
        .catch((error) => console.error("Error fetching data:", error));
    };
    // Fetch the data every 2 seconds
    const intervalId = setInterval(fetchData, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="plant-details div-center">
      <div className="plant-condition">
        <div className="plant-details-header">
          Plant Condition Using Sensors
        </div>
        <div className="plant-condition-container">
          <div className="plant-condition-text pb-1">
            Monitoring plant health can be accomplished using a variety of
            sensors that track different environmental conditions, physiological
            responses, and chemical properties of the plants. Here are some
            common sensors used in agriculture and plant health monitoring:{" "}
          </div>
          <div
            className="plant-condition-info-container"
            style={{ marginBottom: "2rem" }}
          >
            <PlantConditionInfo
              text="Temperature Sensor"
              image=".\..\images\temp.jpg"
              value={sensordata.temperature_c + " (in celcius)"}
              condition="Healthy"
            />
            <PlantConditionInfo
              text="Humidity Sensor"
              image=".\..\images\temp.jpg"
              value={"Humidity : " + sensordata.humidity+ "%"}
              condition="Healthy"
            />
            <PlantConditionInfo
              text="LDR"
              image=".\..\images\ldr.png"
              value={1023-sensordata.ldr_value}
              condition={1023-sensordata.ldr_value<250? "Not suitable":"Suitable"}
            />
            <PlantConditionInfo
              text="Heat index"
              image=".\..\images\temp.jpg"
              value={sensordata.heat_index_c + " (in celcius)"}
              condition="Good for plant growth"
            
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PlantCondition);
