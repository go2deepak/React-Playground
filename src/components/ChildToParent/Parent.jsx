import React, {useState} from 'react'
import Child from './Child'

const Parent = () => {

    const [background, setBackground] = useState()

    const myFunc = (color) => {
        setBackground(color)
    }
  return (
    <div style={{ background, padding: '20px', height: '100vh' }}>
        <Child  pass= {myFunc}/>
    </div>
  )
}

export default Parent