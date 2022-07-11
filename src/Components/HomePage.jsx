import React, { useEffect, useState } from 'react';
import Search from './Search';
import SunRiseSet from './SunRiseSet';
import WeatherWeekList from './WeatherWeekList';
import "./HomePage.css";
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
        
                    {weather && (
                        <div>

                            <WeatherWeekList weather={weather} />
                            <SunRiseSet weather={weather}/>
                        </div>
                    )}

                </div>
            </div>
        
        
        
        </div>
    )
}

export default HomePage