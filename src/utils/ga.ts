interface CustomEventProps {
    event: string;
    [key: string]: any;
}

export const sendCustomEvent = (
    event: string,
    options: Record<string, any>
) => {
    console.log('trying to send');

    const customEvent: CustomEventProps = {
        event,
        ...options,
    };
    console.log(customEvent);

    if (window?.dataLayer?.push) {
        window?.dataLayer?.push(customEvent);
    }
};
