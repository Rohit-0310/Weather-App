import React from 'react'

const GoogleMap = ({
    weather,
    weather: {  main, name, temp, timezone },
  }) => {


    console.log(" inside GoogleMap", weather.name)
  return (
    <div>GoogleMap</div>
  )
}

export default GoogleMap