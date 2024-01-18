interface CustomEventProps {
    event: string;
    [key: string]: any;
}

export const event = (event: string, options: Record<string, any>) => {
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
