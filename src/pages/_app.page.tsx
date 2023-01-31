import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto_Flex } from '@next/font/google';
import { ThemeProvider } from '~/providers';

const roboto = Roboto_Flex({
    subsets: ['latin'],
    weight: ['400', '600'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style
                jsx
                global
            >{`
                html {
                    font-family: ${roboto.style.fontFamily};
                }
            `}</style>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
