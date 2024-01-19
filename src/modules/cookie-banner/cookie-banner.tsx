import { useEffect, useState } from 'react';
import {
    Button,
    ButtonWrapper,
    BannerWrapper,
    ClosedCookieWrapper,
} from './cookie-banner.styles';
import { Text } from '~/components';
import Image from 'next/image';
import { COOKIE_TOKEN } from '~/utils/ga';
import { useRouter } from 'next/router';

const toggleCookieScript = (accepted: boolean) => {
    if (accepted) {
        const script = document.createElement('script');
        script.src = '/gtm.js';
        script.async = true;
        script.id = 'google-tag-manager';
        document.head.appendChild(script);

        const noscript = document.createElement('noscript');
        noscript.id = 'gtm-noscript';
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.googletagmanager.com/ns.html?id=GTM-K9QBLHCL`;
        iframe.height = '0';
        iframe.width = '0';
        iframe.style.display = 'none';
        iframe.style.visibility = 'hidden';
        noscript.appendChild(iframe);
        document.body.appendChild(noscript);
    } else {
        const script = document.getElementById('google-tag-manager');
        if (script) {
            script.remove();
        }
        const noscript = document.getElementById('gtm-noscript');
        if (noscript) {
            noscript.remove();
        }
    }
};

const CookieBanner = () => {
    const router = useRouter();

    const [showCookieBanner, setShowCookieBanner] = useState(false);

    const handleClick = (accepted: boolean) => {
        if (accepted) {
            localStorage.setItem(COOKIE_TOKEN, 'accepted');
            toggleCookieScript(true);
        } else {
            localStorage.setItem(COOKIE_TOKEN, 'rejected');
        }
        setShowCookieBanner(false);
        router.reload();
    };

    useEffect(() => {
        const cookie = localStorage.getItem(COOKIE_TOKEN);

        if (!cookie) {
            setShowCookieBanner(true);
        } else {
            setShowCookieBanner(false);
            toggleCookieScript(cookie === 'accepted');
        }
    }, []);

    if (!showCookieBanner)
        return (
            <ClosedCookieWrapper onClick={() => setShowCookieBanner(true)}>
                <Image
                    src="/static/cookie.svg"
                    alt="Cookie"
                    width={48}
                    height={48}
                />
            </ClosedCookieWrapper>
        );

    return (
        <BannerWrapper>
            <Text>
                This website uses cookies. I use GA4 & GTM. Do you accept?
            </Text>
            <ButtonWrapper>
                <Button onClick={() => handleClick(true)}>Yes</Button>
                <Button onClick={() => handleClick(false)}>No</Button>
            </ButtonWrapper>
        </BannerWrapper>
    );
};

export { CookieBanner };
