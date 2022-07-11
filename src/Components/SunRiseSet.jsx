import React from 'react'
import "./SunRiseSet.css"
const SunRiseSet = ({
    weather,
    weather: { sunrise, sunset, humidity, pressure},


}) => {

    return (
        <div>
            <div>
                <div className="PressHum">
                    <div>
                        <span className="Bold">Pressure</span>
                        <span>{pressure} hpa</span>
                    </div>
                    <div>
                        <span>Humidity</span>
                        <span>{humidity} %</span>
                    </div>
                </div>

                <div>
                    <div>
                        <span>Pressure</span>
                        <span>{pressure} hpa</span>
                    </div>
                    <div>
                        <span>Humidity</span>
                        <span>{humidity} %</span>
                    </div>
                </div>
            </div>
            <div className="weather_curve">
                <img width="95%" src="https://www.suntoday.org/images/sunrise-sunset.png" alt="Sunrise and Sunset" />
            </div>
        </div>
    )
}

export default SunRiseSet;