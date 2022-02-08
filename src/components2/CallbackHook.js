import React, { useState, useCallback } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

const [counter, setCounter] = useState(0);

// const incrementCounter = () =>{
//     setCounter( counter + 1 );
// }

 const incrementCounter = useCallback( (num)=> {
     setCounter( (c) => c + num );
 },[ setCounter ] );

    return (
        <>
            {
                counter
            }
        <ShowIncrement  incrementCounter={ incrementCounter } />
        </>
    );

}

export default CallbackHook;