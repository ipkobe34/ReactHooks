import React, { createContext } from 'react';
import utils from '../util/utils';

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
    // const [ theme, setTheme ] = useState(false);s
    const { colorHeaderTrue, colorHeaderFalse } = utils();

    return (
            <ThemeContext.Provider value={{ colorHeaderTrue, colorHeaderFalse }}>
                { children }
            </ThemeContext.Provider>
    );
}

export default ThemeContext;