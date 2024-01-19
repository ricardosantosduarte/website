import { styled } from '~/stitches.config';

const BannerWrapper = styled('div', {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 'calc(100vw - 2rem)',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    backgroundColor: '$cookieBanner',
});

const ButtonWrapper = styled('div', {
    display: 'flex',
    gap: '1rem',
});

const Button = styled('button', {
    backgroundColor: '$cookieBanner',
    border: 'none',
    borderRadius: '0.5rem',
    color: '$text',
    fontFamily: '$primary',
    fontSize: '1rem',
    cursor: 'pointer',
    minHeight: '48px',
    minWidth: '48px',
});

const ClosedCookieWrapper = styled('div', {
    position: 'absolute',
    right: '1rem',
    bottom: '1rem',
    cursor: 'pointer',
});

export { BannerWrapper, ButtonWrapper, Button, ClosedCookieWrapper };
