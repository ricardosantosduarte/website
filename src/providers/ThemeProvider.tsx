import React, { Dispatch, createContext, useReducer } from 'react';
import { darkTheme } from '~/stitches.config';

interface State {
    isDarkMode: boolean;
    selectedTheme: string | typeof darkTheme;
}

const initialState = {
    selectedTheme: '',
    isDarkMode: false,
};

const ThemeContext = createContext({} as any);

const themes = {
    light: '',
    dark: darkTheme,
};

const ACTION_TYPES = {
    TOGGLE_THEME: 'TOGGLE_THEME',
};

const themeReducer = (state: State, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.TOGGLE_THEME: {
            const isDarkMode = state.isDarkMode;
            let newState: State = state;

            if (isDarkMode) {
                newState = {
                    ...state,
                    isDarkMode: false,
                    selectedTheme: themes.light,
                };
            } else {
                newState = {
                    ...state,
                    isDarkMode: true,
                    selectedTheme: themes.dark,
                };
            }

            return newState;
        }
        default:
            throw new Error('Unhandle Action Type' + action.type);
    }
};

interface Props {
    children?: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            <div
                className={`container${
                    state.selectedTheme ? ` ${state.selectedTheme}` : ''
                }`}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export { ACTION_TYPES, ThemeProvider, ThemeContext };
