import { styled } from '~/stitches.config';

const width = '50px';
const height = '25px';
const gutter = '5px';
const controlSpeed = '0.15s';
const controlEase = 'ease-in';

const radius = `calc(${height} / 2)`;
const controlSize = `calc(${height} - ${gutter} * 2)`;

const ToggleLabel = styled('label', {
    display: 'block',
    position: 'relative',
    paddingLeft: width,
    cursor: 'pointer',
    fontSize: '22px',
    userSelect: 'none',
});

const ToggleInput = styled('input', {
    position: 'absolute',
    opacity: '0',
    cursor: 'pointer',
    height: '0',
    width: '0',

    ['&:checked ~ span']: {
        backgroundColor: '$primary',
        ['&:after']: {
            left: `calc( ${width} - ${controlSize} - ${gutter})`,
        },
    },
});

const ToggleSpan = styled('span', {
    position: 'absolute',
    top: '0',
    left: '0',
    height: height,
    width: width,
    borderRadius: radius,
    backgroundColor: '$antBackground',
    transition: `background-color ${controlSpeed} ${controlEase}`,

    ['&:after']: {
        content: '',
        position: 'absolute',
        left: gutter,
        top: gutter,
        width: controlSize,
        height: controlSize,
        borderRadius: radius,
        background: '$toggleBall',
        transition: `left ${controlSpeed} ${controlEase}, background ${controlSpeed} ${controlEase}`,
    },
});

export { ToggleLabel, ToggleInput, ToggleSpan };
