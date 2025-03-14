// import React, { useMemo, useState } from 'react'

// const UseMemo = () => {

//     const[count, setCount] = useState(7)
//     const expensive = useMemo(() => {
//         console.log('Calculating ....');
//         return count * 2
//     }, [count])
//   return (
//     <div>
//         <h1>Expensive Calculation: {expensive}</h1>
//         <button onClick={setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }

// export default UseMemo


import React, { useMemo, useState } from 'react'

const UseMemo = () => {

  const[count, setCount] = useState(0)

  const expensive = useMemo(() => {
    return count+20
  }, [count])

  return (
    <div>

      <h1>{expensive}</h1>
      <button onClick={() => {setCount(count+1)}}>Click here</button>
    </div>
  )
}

export default UseMemo