import React, { useState, useEffect } from "react"
import Cities from './Cities'
import Style from './style.css'
import Loading from './loading';

const KEY = '177ad18362b0e8180cd4885f1f67e7ca'

const App = () => {

  const [geo, setGeo] = useState({ lat: 48, long: 2.37 });
  const [meteo, setMeteo] = useState([])

  useEffect(
    () => {
      getWeatherByLocation(geo)
    }, [geo]
  );

  const changeGeo = (newLat, newLong) => {
    setGeo({ lat: newLat, long: newLong })
  }

  useEffect(
    () => {
      console.log(meteo)
    }, [meteo]
  );

  window.navigator.geolocation.getCurrentPosition(
    (position) => setGeo({ lat: position.coords.latitude, long: position.coords.longitude }),
  );

  if (geo.lat === 0) {
    return <div><Loading /></div>
  }

  async function getWeatherByLocation(geoObject) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoObject.lat}&lon=${geoObject.long}&exclude=current,minutely,hourly&units=metric&appid=${KEY}`)
    console.log(geoObject)
    let data = await res.json()
    setMeteo(data.daily)
    console.log("je cherche la météo")

  }

  return (
    <div>
      <Cities onClick={changeGeo} />
      {(meteo === undefined) ? "L'API est down" : meteo[0].temp.day}
    </div>
  )

}

export default App