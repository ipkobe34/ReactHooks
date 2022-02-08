import { useState, useEffect, useReducer } from 'react';

const initialState = {
    pokemons: [],
};

const pokemonReducer = ( state, action ) => {
    switch (action.type) {
        case 'ADD_POKEMON':
            return {
                ...state,
                pokemons: [ ...state.pokemons, ...action.payload ]
            };
        
        default:
            return state;
    };
};

const usePokemons = ()=> {

const API = 'https://pokeapi.co/api/v2/pokemon';
const [ state, dispatch ] = useReducer( pokemonReducer ,initialState );
const { pokemons } = state;

const [ state1, setState1 ] = useState( [] );

    useEffect( ()=>{ 
        fetch( API )
            .then( response => response.json() )
            .then( data => setState1(data.results));
    },[ API ]);
    console.log(state1)

// ---------
    useEffect( ()=>{ 
            fetch( API )
                .then( response => response.json() )
                .then( data => {
                    console.log("data" ,data.results)
                    dispatch( {
                    type: 'ADD_POKEMON',
                    payload: data.results,
                } )});
        },[ API ]);
    console.log('reducer',pokemons)

    return {
        pokemons,
    }
}

export default usePokemons;