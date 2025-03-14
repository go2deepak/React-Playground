import React, {useState} from 'react'
import HOC from './HOC'


const Counter1 = (props) => {


    
  return ( 
    <div>
        <h1>{props.count}</h1>
        <button onClick={props.value}>+</button>
    </div>
  )
}

export default HOC(Counter1)