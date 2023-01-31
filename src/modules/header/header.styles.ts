import { Text } from '~/components';
import { styled } from '~/stitches.config';

const HeaderWrapper = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    '@bp1': {
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

const HeaderSection = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    variants: {
        alignBottom: {
            true: {
                alignItems: 'flex-end',
                height: '100%',
            },
        },
    },
});

const TextWrapper = styled('div', {
    display: 'flex',
    alignItems: 'start',
    position: 'relative',
});

const StyledText = styled(
    'span',
    {
        marginRight: '0.5rem',
    },
    Text
);

const MoreInfoWrapper = styled('div', {
    borderTop: '3px',
    borderStyle: 'solid',
    borderColor: '$text',
    transition: 'border-color 0.15s ease-in-out',
    width: '200px',

    '@bp1': {
        width: '100%',
    },
});

const MoreInfo = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
});

const SocialsWrapper = styled('div', {
    display: 'flex',
});

const SocialLink = styled('a', {
    display: 'flex',

    ['&:not(:first-child)']: {
        marginLeft: '0.5rem',
    },
});

const SocialIcon = styled('i', {
    width: '24px',
    height: '24px',
    overflow: 'hidden',

    variants: {
        github: {
            true: {
                ['& > svg > path']: {
                    transform: 'scale(0.25)',
                },
            },
        },
        fill: {
            true: {
                ['& > svg > path']: {
                    fill: '$$fill',
                },
            },
        },
    },
});

export {
    MoreInfoWrapper,
    HeaderWrapper,
    HeaderSection,
    TextWrapper,
    MoreInfo,
    StyledText,
    SocialsWrapper,
    SocialLink,
    SocialIcon,
};
