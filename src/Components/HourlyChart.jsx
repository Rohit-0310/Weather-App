import React from 'react';


import cloud from "../ICON/cloud_sunny.png";
import rain from "../ICON/rain.png";
import sunny from "../ICON/sunny.png";

import "./HourlyChart.css";



import {
    ResponsiveContainer,
    LineChart,
    Tooltip,
    Line,
    Legend,
    XAxis,
    YAxis,
    CartesianGrid,
  } from "recharts";





const HourlyChart = ({
    weather,
    weather: {  main, name, temp, timezone },
  }) => {
    return (
        <div className="MainHr">
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


            {/* Chart */}

            
            
            
            <div className="ChartMain">
                <ResponsiveContainer width="100%">
                    <LineChart
                        // width={650}
                        // height={250}
                        data={weather.hourly}
                        // margin={{ top: 20, right: 2, left: 20 }}
                    >   
                          <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="title" interval={'preserveStartEnd'} />
                        {/* <YAxis /> */}
                        <Tooltip />
                        <Legend />
                        <Line 
                         type="monotone" dataKey="temp" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        
        
        </div>
    )
}

export default HourlyChart