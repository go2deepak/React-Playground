import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const[count, setCount] = useState(7)
    const expensive = useMemo(() => {
        console.log('Calculating ....');
        return count * 2
    }, [count])
  return (
    <div>
        <h1>Expensive Calculation: {expensive}</h1>
        <button onClick={() => setCount(count + 1)}>INcrease</button>
    </div>
  )
}

export default UseMemo