import React from 'react';


import cloud from "../ICON/cloud_sunny.png";
import rain from "../ICON/rain.png";
import sunny from "../ICON/sunny.png";

import "./HourlyChart.css";



import {
    ResponsiveContainer,
    Tooltip,
    Legend,
    XAxis,
    AreaChart,
    Area,
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
                    <AreaChart
                        // width={650}
                        // height={250}
                        data={weather.hourly}
                        // margin={{ top: 20, right: 2, left: 20 }}
                    >   
                          <CartesianGrid strokeDasharray="2" />
                        <XAxis dataKey="title" interval={'preserveStartEnd'} />
                        {/* <YAxis /> */}
                        <Tooltip />
                        <Legend />
                        <Area 
                         type="monotone" 
                         dataKey="temp" 
                         activeDot={{r:7}}
                         stroke="rgb(0, 166, 250)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        
        
        </div>
    )
}

export default HourlyChart