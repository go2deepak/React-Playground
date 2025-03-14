import React, {useState, useCallback} from 'react'

const Usecallback = () => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        setCount(count + 1)
    })
  return (
    <div>
        <h1> {count}</h1>

        <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default Usecallback;