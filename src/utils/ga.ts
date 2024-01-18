interface CustomEventProps {
    event: string;
    [key: string]: any;
}

export const event = (event: string, options: Record<string, any>) => {
    const customEvent: CustomEventProps = {
        event,
        ...options,
    };
    if (window?.dataLayer?.push && customEvent['gtm.uniqueEventId']) {
        window?.dataLayer?.push(customEvent);
    }
};
