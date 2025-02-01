import React from 'react'
import HigherOrderComp from './HigherOrderComp'

const Counter2 = (props) => {
  return (
    <div>
        <h2>{props.count}</h2>
        <button onClick={props.handleEvent}>+</button>
    </div>
  )
}

export default HigherOrderComp(Counter2)