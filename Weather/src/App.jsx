import React,{useEffect,useState} from 'react'
import weather_1 from "./components/weather_1"

function App() {
  const[weather,setweather]=useState([null])
  useEffect(()=>{
   fetch('https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')
   .then(res=>res.json()) 
   .then(data=>{
    setweath(data);
   })
  },[])
  return (
    <div>{
      weather.map((b,i)=>(
         <Fashion key={i} props={b}/>

      ))
      }
     </div>
  )
}

export default App
