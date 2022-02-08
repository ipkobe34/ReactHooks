import React from 'react';
import usePokemons from '../hooks/usePokemons';

const Pokemon = () => {

const { pokemons, } = usePokemons();

// console.log(pokemons);
  return (
      <>
        <h1>Pokemon component list</h1>
        <div className="card">
            {
                pokemons.map( pokemon => (
                    <div 
                        className="card-detail"
                        key={ pokemon.name }
                    >
                        <h4 >{ pokemon.name } </h4> 
                        <button className="btn btn-success">detail</button>
                    </div>
                ) )
            }   
        </div>
      </>
  );
};

export default Pokemon;
