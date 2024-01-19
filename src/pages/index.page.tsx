import Head from 'next/head';
import { Spacer, Text, Toggle } from '~/components';
import { CookieBanner, Footer, Header, Introduction } from '~/modules';
import styles from '~/styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>#dev / Ricardo Santos Duarte</title>
                <meta
                    name="description"
                    content="I'm a Frontend dev // React // Next.js // Portugal"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    href="/static/favicon.ico"
                />
            </Head>
            <main className={styles.main}>
                <Header />
                <Introduction />
                <Footer />
                <CookieBanner />
            </main>
        </>
    );
}
