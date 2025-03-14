import React from 'react'
import { createContext, useState } from 'react'

import Child from './Child'
export const  MyContext = createContext()


const Parents = () => {

    const [theme,  setTheme] = useState('light')



    const toggleTheme = () =>{
        setTheme((prev) => prev === 'light'? 'dark': 'light')
    }
    

  return (
    <div>
        <MyContext.Provider value={{theme, toggleTheme}}>
             <Child />
        </MyContext.Provider>

    </div>
  )
}

export default Parents