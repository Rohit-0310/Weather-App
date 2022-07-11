import React from 'react';


import cloud from "../ICON/cloud_sunny.png";
import rain from "../ICON/rain.png";
import sunny from "../ICON/sunny.png";

import "./HourlyChart.css";



const HourlyChart = ({
    weather,
    weather: {  main, name, temp, humidity, pressure, timezone },
  }) => {
    return (
        <div MainHr>
            <div className="HrTemp">
                <h1 >{Math.floor(temp)} °C</h1>
                <img className="HrChartImg"
                        src={
                          main  === "Clear"
                          ? sunny
                          :main  === "Clouds" 
                          ? cloud
                          :rain
                        }
                        alt={main}
                      />
                      <div className="HrTimezone">
                        <p>{name} {timezone}</p>
                      </div>
            </div>
            <div></div>
        
        </div>
    )
}

export default HourlyChart