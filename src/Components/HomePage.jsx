import React from 'react'
import Search from './Search'
import "./HomePage.css"
import WeatherDetails from './WeatherDetails'
const HomePage = () => {
    return (
        <div>
            <div className="home_top">
                <div className="card">
    
                    <Search/>
                    <p>this is for testing purposes</p>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <p>1</p>
                    <p>this is for testing purposes</p>
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                    <p>1</p>

                    <WeatherDetails />
                </div>
            </div>
        
        
        
        </div>
    )
}

export default HomePage