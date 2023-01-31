import { createStitches } from '@stitches/react';

const { styled, getCssText, createTheme, globalCss } = createStitches({
    media: {
        bp1: '(max-width: 640px)',
        bp2: '(max-width: 768px)',
        bp3: '(max-width: 1024px)',
    },
    theme: {
        colors: {
            text: 'black',
            background: '#eee7d7',
            primary: '#FF5C00',
            antBackground: 'white',
            toggleBall: '#FF5C00',
        },
        fontSizes: {
            title: '2.25em',
            text: '1.25em',
            subTitle: '0.75em',
        },
        lineHeights: {
            custom: '25px',
        },
        fontWeights: {
            bold: '600',
            semi: '500',
            regular: '400',
        },
        sizes: {
            space50: '0.5rem',
            space100: '1rem',
            space200: '2rem',
        },
    },
});

const darkTheme = createTheme('dark', {
    colors: {
        text: 'white',
        background: '#383838',
        primary: '#FF5C00',
        antBackground: '#383838',
        toggleBall: 'black',
    },
});

const GlobalStyles = globalCss({
    body: {
        fontFamily:
            'Roboto-flex, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important',
        color: '$text',
    },
    ['div.container']: {
        minHeight: '100vh',
        transition:
            'background-color 0.15s ease-in,  border-color 0.15s ease-in-out',
        backgroundColor: '$background',
        color: '$text',
    },
    p: {
        transition: 'color 0.15s ease-in',
    },
    span: {
        transition: 'color 0.15s ease-in',
    },
    path: {
        transition: 'fill 0.15s ease-in',
    },
    a: {
        color: '$primary',
        textUnderlineOffset: '0.3em',
        cursor: 'pointer',

        ['&:disabled']: {
            cursor: 'not-allowed',
        },
    },
});

GlobalStyles();

export { styled, getCssText, globalCss, darkTheme, GlobalStyles };
