import React from 'react'
import HigherOrderComp from './HigherOrderComp'

const Counter1 = (props) => {
  return (
    <div>
        <h1>Counter 1</h1>
        <h2>{props.count}</h2>
        <button onClick={props.handleEvent}>+</button>
    </div>
  )
}

export default HigherOrderComp(Counter1)