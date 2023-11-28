// import React from "react";
import React, { useState, useEffect } from "react";

import townImage from "../../Images/town-image.jpg";
import cold from "../../Images/cold (1).png";
import mild from "../../Images/mild (1).png";
import sunny from "../../Images/sunny (1).png";

//"../../images/halifax.jpg"
//C:\Users\adity\Desktop\SDEV\ReactAssignment\ReactApp\react-app-assignment\src\Components\town-image.jpg

function MyTown() {
  const [temperature, setTemp] = useState(0);
  const [imageName, setImage] = useState(sunny);
  const [variable, setVar] = useState("Convert to F");
  const [unit, setUnit] = useState("C");
  // //

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=44.651070&lon=-63.582687&appid=f264c1663fb2466f5a18ba1c6c65a072",
      {}
    )
      .then((data) => data.json())
      .then((result) => {
        console.log("Result: ", result);
        setTemp(result.main.temp - 273.15);

        if (result.main.temp - 273.15 >= 20) {
          setImage(sunny);
        }
        if (
          (result.main.temp - 273.15 > 10) &
          (result.main.temp - 273.15 <= 20)
        ) {
          setImage(mild);
        }
        if (result.main.temp - 273.15 <= 10) {
          setImage(cold);
        }
      });
  }, []);

  const switchTemp = () => {
    if (variable === "Convert to F") {
      setVar("Convert to C");
      setTemp((temperature * 9) / 5 + 32);
      setUnit("F");
    } else {
      setVar("Convert to F");
      setTemp(((temperature - 32) * 5) / 9);
      setUnit("C");
    }
  };

  return (
    // add picture of your town
    // add towns name
    // add current weather
    <div>
      <center>
        <h2>The Town where I live is Halifax</h2>
      </center>
      <div>
        <img className="townImage" src={townImage} alt="TownImage" />
        <p className="tempData">
          Current Temperature :{temperature.toFixed(2)} {unit}
        </p>
        <p className="statusImage">
          <img
            className="statusImage"
            src={imageName}
            alt="TemperatureStatusImage"
          />
        </p>
      </div>
      <div>
        <button className="convertButton" onClick={switchTemp}>
          {variable}
        </button>
      </div>
    </div>
  );
}

export default MyTown;
