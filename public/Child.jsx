import React from 'react'

const Child = (props) => {
  return (
    <div>
      <button onClick={() => props.name('Deepak')}>CHnage name</button>
    </div>
  )
}

export default Child

// import React, {useState} from 'react'
// import Child from './Child'

// const App = () => {
//   const [name, setName] = useState('Ranjit')

//   const sentToParent = (name) =>{
//     setName(name)
//   }
//   return (
//     <div>
//       <h1>{name}</h1>
//       <Child  name = {sentToParent}/>
//     </div>
//   )
// }

// export default App