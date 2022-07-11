import React, { useEffect, useState } from 'react';
import Search from './Search';
import WeatherDetails from './WeatherDetails';
import WeatherWeekList from './WeatherWeekList';
import "./CSS/HomePage.css";
import getFormattedWeatherData from "./API/weather";

const HomePage = () => {

    const [weather, setWeather] = useState(null);
    const [query, setQuery] = useState({ q: "Patna" });

    
    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, units: "metric" }).then(
                (data) => {
                    setWeather(data);
                }
            );
        };
        
        fetchWeather();

        }, [query]);


    console.log(weather)
    return (
        <div>
            <div className="home_top">
                <div className="card">
    
                    <Search setQuery={setQuery}/>
                    <p>this is for testing purposes</p>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <p>1</p>
                    

                    {weather && (
                        <div>

                            <WeatherWeekList weather={weather} />
                            <WeatherDetails weather={weather}/>
                        </div>
                    )}

                </div>
            </div>
        
        
        
        </div>
    )
}

export default HomePage