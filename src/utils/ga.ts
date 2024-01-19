const COOKIE_TOKEN = 'cookies-token';

interface CustomEventProps {
    event: string;
    [key: string]: any;
}

const sendCustomEvent = (event: string, options?: Record<string, any>) => {
    const areCookiesAccepted =
        localStorage.getItem(COOKIE_TOKEN) === 'accepted';

    const customEvent: CustomEventProps = {
        event,
        ...options,
    };

    if (areCookiesAccepted && window?.dataLayer?.push) {
        window?.dataLayer?.push(customEvent);
    }
};

export { COOKIE_TOKEN, sendCustomEvent };
