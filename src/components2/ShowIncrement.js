import React, { memo } from 'react';

const ShowIncrement = memo(({ incrementCounter }) => {
  
    console.log('me volvi a renderizar');

  return (
      <button
        className="btn btn-primary"
        onClick={  ()=> {
            incrementCounter(5)
        } }
      >
        Incrementar
      </button>

  );
});

export default ShowIncrement;
