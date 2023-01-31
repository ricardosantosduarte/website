// pages/index.js
import { styled } from '~/stitches.config';

const Text = styled('p', {
    fontSize: '$text',
    color: '$text',
    fontWeight: '$regular',

    variants: {
        size: {
            title: {
                fontSize: '$title',
            },
            subTitle: {
                fontSize: '$subTitle',
            },
        },
        color: {
            highlight: {
                color: '$primary',
            },
        },
        weight: {
            semi: {
                fontWeight: '$semi',
            },
            bold: {
                fontWeight: '$bold',
            },
        },
        lineHeight: {
            custom: {
                lineHeight: '$custom',
            },
        },
        align: {
            right: {
                textAlign: 'right',
            },
            center: {
                textAlign: 'center',
            },
        },
    },
});

export { Text };
