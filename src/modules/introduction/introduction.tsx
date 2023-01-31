import { Spacer, Text } from '~/components';
import { IntroductionWrapper } from './introduction.styles';
import { differenceInYears } from 'date-fns';

const Introduction = () => {
    const currentAge = differenceInYears(new Date(), new Date(1999, 7, 13));

    return (
        <IntroductionWrapper>
            <Spacer size={'l'} />
            <Text>
                Hi, my name is{' '}
                <Text
                    as={'span'}
                    color={'highlight'}
                    weight={'bold'}
                >
                    Ricardo.
                </Text>
            </Text>
            <Text>
                I’m an eager {currentAge} year old guy that likes{' '}
                <Text
                    as={'span'}
                    color={'highlight'}
                    weight={'bold'}
                >
                    Frontend
                </Text>{' '}
                development, simplicity & gaming.
            </Text>
            <Text>
                I strive to build applications that are scalable, simple and
                easy to work with.
            </Text>

            <Text>
                I am most confortable with{' '}
                <Text
                    as={'span'}
                    color={'highlight'}
                    weight={'bold'}
                >
                    React
                </Text>{' '}
                and{' '}
                <Text
                    as={'span'}
                    color={'highlight'}
                    weight={'bold'}
                >
                    Next.js
                </Text>
                .{' '}
                <Text
                    size={'subTitle'}
                    as={'span'}
                >
                    Although I get some{' '}
                    <Text
                        size={'subTitle'}
                        as={'span'}
                        color={'highlight'}
                        weight={'bold'}
                    >
                        Vue.js (v.3)
                    </Text>{' '}
                    done as well.
                </Text>
            </Text>
            <Spacer size={'l'} />
        </IntroductionWrapper>
    );
};

export { Introduction };
