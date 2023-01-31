import { styled } from '~/stitches.config';

const IntroductionWrapper = styled('div', {
    textAlign: 'left',
    lineHeight: '2.2rem',

    ['& > :not(:first-child)']: {
        marginTop: '1rem',
    },
});

export { IntroductionWrapper };
