// GreatGrandChildren.js
import React, { useContext } from 'react';
import { ThemeContext } from './Children'; 

const GreatGrandChildren = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
    height: '100vh'
  };

  return (
    <div style={styles}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default GreatGrandChildren;
