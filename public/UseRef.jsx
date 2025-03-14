import React, {useRef} from 'react'

const UseRef = () => {

  let id = useRef()
  
    const handleClick = () =>{
      id.current.focus()
    }
  return (
    <div>
      <input type='text' ref={id}/>
        <button onClick={handleClick} >Click here</button>
    </div>
  )
}

export default UseRef