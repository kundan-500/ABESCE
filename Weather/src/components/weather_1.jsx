import React from 'react'

function weather_1() {
  return (
     <div id="card">
        <img src={props.image} alt="" height={100} width={100}/>
        <h4>Area:{props.Area}</h4>
        <h4>Temp:{props.Temp}</h4>
    </div>
  )
}
export default weather_1