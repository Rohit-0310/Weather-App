import React, { useEffect, useState } from 'react'
import pinloc from "../ICON/pin.png";
import searchIcon from "../ICON/search-interface-symbol.png"
import "./Search.css"



const Search = ({ setQuery }) => {
    const [city, setCity] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function success(position) {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setQuery({ lat, lon });
        },
        );
    }, []);



    // const findLocation = () => {
            
    // };     
    
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                if (city !== "") {
                  setQuery({ q: city });
                }
                setCity("");
                console.log(city);
            }
        };
    return (
      <div>
          <div>
              <div className="SearchMain">
                    <div> <img className="LocIcon"  src={pinloc} alt="location" /></div>

                    <input className="InputSearch"
                    type="text"
                    name="search"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search City" 
                    />

                    <button className="SearchButton" type="button">
                        <img  onClick={handleKeyDown}  className="LocIcon" src={searchIcon} alt="search" />
                    </button>
              </div>
          </div>
      </div>
    )
}

export default Search