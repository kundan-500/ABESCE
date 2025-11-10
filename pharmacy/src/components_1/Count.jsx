import React, { useState } from 'react'

export default function Count() {
    const[color,setColor]=useState(0)
    function inc(){
           setColor(color+1)
    }
  return (
    <div>
        <button onClick={inc}>+</button>
        <spam>{color}</spam>
        <button>-</button>
    </div>
  );
}

