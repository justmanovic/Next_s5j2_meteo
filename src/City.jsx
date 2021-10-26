import React from "react"


const City = (props) => {

  return (

    // <div className="city" onClick={props.onClick}>{props.name}</div>
    <div className="city" onClick={() => props.onClick(props.lat, props.long)} >{props.name}</div>

  );

}

export default City