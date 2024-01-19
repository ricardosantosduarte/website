import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { getCssText } from '~/stitches.config';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <style
                    id="stitches"
                    dangerouslySetInnerHTML={{ __html: getCssText() }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
