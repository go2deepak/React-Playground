import React, {useState, useCallback} from 'react'

const UseCallback = () => {
    const [count, setCount] = useState(0)
    const increament = useCallback(()=>{
        setCount((prev) => prev  + 1)
    }, [])

  return (

    <div>
        <p>Count: {count}</p>
        <button onClick={increament}>Click here</button>
    </div>

  )
}

export default UseCallback