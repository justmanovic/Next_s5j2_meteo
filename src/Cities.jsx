import React, { useState, useEffect } from "react"
import City from './City'



const Cities = () => {

  return (
    <div className="cities">
      <City name="Current location" />
      <City name="London" />
      <City name="Bamako" />
      <City name="Sidney" />
    </div>
    )
}

export default Cities