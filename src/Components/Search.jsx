import React from 'react'
import pinloc from "../ICON/pin.png";
import searchIcon from "../ICON/search-interface-symbol.png"
import "./Search.css"
const Search = () => {
  return (
    <div>
        <div>
            <div className="SearchMain">
                <div> <img className="LocIcon"  src={pinloc} alt="location" /></div>
                <input className="InputSearch" type="text" placeholder="Search City" />
                <button className="SearchButton" type="button">
                    <img className="LocIcon" src={searchIcon} alt="search" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Search