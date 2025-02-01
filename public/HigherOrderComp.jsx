import React, { useState } from 'react'

const HigherOrderComp = (Counter) => {
    const Inner = () =>{
    const [count, setCount] = useState(0)
    const handleClick = () =>{
        setCount(count +1 )
    }

        return <Counter count ={count} handleEvent={handleClick}/>
    }
    return Inner
  
}

export default HigherOrderComp