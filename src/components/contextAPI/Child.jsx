import React, { useContext } from 'react'
import { MyContext } from './Parents'


const Child = () => {
const {theme, toggleTheme} = useContext(MyContext)

const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
    height: '100vh'
  };

  return (
    <div style={styles}>
        <div>Current: {theme}</div>
        <button onClick={toggleTheme}> Change Theme to {theme === 'light'?'dark':'light'} </button>
    </div>
  )
}

export default Child