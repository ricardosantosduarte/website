import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { getCssText } from '~/stitches.config';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <Script
                    src={'/gtm.js'}
                    id="google-tag-manager"
                    strategy="afterInteractive"
                />
                <style
                    id="stitches"
                    dangerouslySetInnerHTML={{ __html: getCssText() }}
                />
            </Head>
            <body>
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=GTM-K9QBLHCL`}
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
