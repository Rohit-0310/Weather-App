import React, { useEffect, useState } from 'react'
import pinloc from "../ICON/pin.png";
import searchIcon from "../ICON/search-interface-symbol.png"
import "./Search.css"
import Cities from "./City" ;


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


    const handleLocationClick = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            setQuery({ lat, lon });
          });
        }
      };


    // const findLocation = () => {
            
    // };     
    
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                if (city !== "") {
                  setQuery({ q: city });
                }
                setCity("");
                console.log(city);
                console.log("Cities",Cities[1].city)
            }
        };

        const handleSearchClick = () => {
            if (city !== "") {
              setQuery({ q: city });
            }
          };

        //   console.log(Cities.city)

        // console.log(city);
    return (
      <div>
          <div>
              <div className="SearchMain">
                    <div> <img onClick={handleLocationClick} className="LocIcon"  src={pinloc} alt="location" /></div>

                    <input className="InputSearch"
                    type="text"
                    name="search"
                    onInput={(e)=>setCity(Cities)}
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search City" 
                    autocomplete="on"
                    />
                    

                    <button className="SearchButton" type="button">
                        <img  onClick={handleSearchClick}  className="LocIcon" src={searchIcon} alt="search" />
                    </button>

                    </div>


                    {
                        Cities
                        .filter((temp)=>{
                            if(city === ""){
                                // return;
                            } else {
                                return temp.city.toLowerCase().includes(city.toLowerCase());
                            }
                        })
                        .map((temp, index)=>{
                            return <div key={index}>
                                <span>{temp.city}</span>,
                                <span>{temp.country}</span>
                            </div>
                        })
                    }
          </div>
      </div>
    )
}

export default Search;