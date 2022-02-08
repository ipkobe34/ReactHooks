import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react';
import Search from './Search';

import './characters.css';

const initialState = {
    favorites: []
};

const favoriteReducer = ( state, action ) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [ ...state.favorites, action.payload ]
            };
        default:
            return state;
    }
}

const Characters = () => {
  
  const URL = 'https://rickandmortyapi.com/api/character/';
  const [ characters, setCharacters ] = useState([]);
  const [ state, dispatch ] = useReducer( favoriteReducer, initialState);
  const [ search, setSearch ] = useState('');
  const searchInput = useRef( null );

  useEffect( () => {
      fetch( URL )
        .then( response => response.json())
        .then( data => setCharacters( data.results ));
  }, [URL]);

  const handleClick = (item) => {
      dispatch({ 
          type: 'ADD_TO_FAVORITE',
          payload: item, 
          });
  }

//   const handleSearch = ()=> {
//       setSearch( searchInput.current.value );
//   }

    const handleSearch = useCallback( () => { 
        setSearch( searchInput.current.value );
     }, []);


//   const filteredUsers = characters.filter( (user) => {
//       return user.name.toLowerCase().includes( search.toLowerCase());
//    } ); 

   const filteredUsers = useMemo( () => 
        characters.filter( (user) => {
        return user.name.toLowerCase().includes( search.toLowerCase());
        }),
        [ characters, search ] 
    );

  return (
      <>
       <Search searchInput={ searchInput } search={ search } handleSearch={ handleSearch }  />
        <div className="contenedor">
            {
                filteredUsers.map( item => (
                
                    <div key={ item.id } className="card animate__animated animate__pulse" style={{ width: "180px" }}>
                        <img src={ item.image } className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{ item.name}</h5>
                            <button
                            className="btn btn-warning"
                            onClick={ ()=> { handleClick(item) } }
                        >Favorito</button>
                        </div>
                    </div>


                ) )
            }
        </div>
      
      </>
  );
};

export default Characters;
