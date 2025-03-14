// Parent.js
import React, { createContext, useState } from 'react';
import GreatGrandChildren from './GreatGrandChildren';

export const ThemeContext = createContext(); // Define theme context

const Children = () => {
  const [theme, setTheme] = useState('light'); // State for theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <GreatGrandChildren />
      </ThemeContext.Provider>
    </div>
  );
};

export default Children;
