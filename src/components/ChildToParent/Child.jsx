import React, {useState} from 'react'

const Child = ({pass}) => {
    const [color, setColor] = useState()

    const handleOnChnage = (e) =>{
        setColor(e.target.value)
    }

    const handleClick = () =>{
        pass(color)
    }
  return (
    <div>
        <input  type='text' placeholder='Enter a color' value={color} onChange={handleOnChnage}/>
        <button onClick={handleClick}>Change Color</button>
    </div>
  )
}

export default Child