import React, { useState, useEffect } from "react"
import City from './City'


const Cities = (props) => {

  const [userLocation, setUserLocation] = useState({ lat: 0, long: 0 });

  useEffect(
    () => {
      getUserGeo()
      console.log("je met à jour ta position")
    },[]
  );

  const getUserGeo = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setUserLocation({ lat: position.coords.latitude, long: position.coords.longitude })
      }
    );
    console.log("ma loc: ", userLocation)
  };

  // getUserGeo()
  // useEffect(
  //   () => {
  //     getWeatherByLocation(userLocation)
  //   },[userLocation]
  // );



  return (
    <div className="cities">
      <City onClick={props.onClick} lat={userLocation.lat} long={userLocation.long} name="Current location" />
      <City onClick={props.onClick} lat='51.5287352' long='-0.381786' name="London" />
      <City onClick={props.onClick} lat='12.6128897' long='-8.1356025' name="Bamako" />
      <City onClick={props.onClick} lat='-33.8473567' long='150.651779' name="Sidney" />
    </div>
  )
}

export default Cities