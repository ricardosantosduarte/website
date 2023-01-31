import { styled } from '~/stitches.config';

const Spacer = styled('div', {
    width: '1px',
    height: '1px',
    paddingBottom: '1rem',

    variants: {
        size: {
            xs: {
                paddingBottom: '0.3rem',
            },
            s: {
                paddingBottom: '0.5rem',
            },
            l: {
                paddingBottom: '2rem',
            },
        },
    },
});

export { Spacer };
