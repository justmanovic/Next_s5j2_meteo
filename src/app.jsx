import React, { useState, useEffect } from "react"
import Cities from './Cities'
import Style from './style.css'
import Loading from './loading';

const KEY = '97d969a1518a3dfccc820fc8a924d135'

const App =  () => {

  const [geo, setGeo] = useState({ lat: 48, long: 2.37 });
  const [meteo, setMeteo] = useState("")

  useEffect(
    () => {
      getWeatherByLocation(geo)
    },[geo]
  );

  window.navigator.geolocation.getCurrentPosition(
    (position) => setGeo({ lat: position.coords.latitude, long: position.coords.longitude }),
  ); 

  if(geo.lat === 0) {
    return <div><Loading /></div>
  }

    async function getWeatherByLocation(geoObject) {
      let res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoObject.lat}&lon=${geoObject.long}&exclude=current,minutely,hourly&units=metric&appid=${KEY}`)
      console.log(geoObject)
      let data = await res.json()
      console.log(data.daily[0].temp.day)
      // setMeteo(data.daily[0].temp.day)
    }





 return(
    <div>
      <Cities />
      {meteo}
    </div>
 )
  
}

export default App