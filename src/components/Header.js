import React, { useState, useContext } from 'react';
import Themecontext from '../context/ThemeContext';

const Header = () => {
  
  const [color, setColor] = useState(true)
  const { colorHeaderTrue, colorHeaderFalse } = useContext(Themecontext);

  const handleClick = ()=> {
    setColor(!color);
  }

  return (
    <div  className="Header animate__animated animate__zoomIn" 
          style={ color ?  colorHeaderTrue : colorHeaderFalse }
    >
      <h1>The Rick and Morty API</h1>
      <button 
        onClick={ handleClick }
        className={ color ? "btn btn-primary" : "btn btn-warning" }
      >
          {
            color
            ?
            'Light Mode'
            :
            'Dark Mode'
          }

      </button>
    </div>
    );
};

export default Header;

