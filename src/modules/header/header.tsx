import { Spacer, Text, Toggle } from '~/components';
import Github from '~/../public/static/github-mark.svg';
import Linkedin from '~/../public/static/linkedin.svg';
import {
    HeaderSection,
    HeaderWrapper,
    TextWrapper,
    StyledText,
    MoreInfoWrapper,
    SocialsWrapper,
    MoreInfo,
    SocialLink,
    SocialIcon,
} from './header.styles';
import { useContext } from 'react';
import { ACTION_TYPES, ThemeContext } from '~/providers/';

const Header: React.FC = () => {
    const { dispatch, state } = useContext(ThemeContext);

    const socials = [
        {
            url: 'https://www.linkedin.com/in/ricardo-santos-duarte/',
            alt: 'linkedin-logo',
            img: <Linkedin />,
            urlLabel: 'Visit my Linkedin profile!',
        },
        {
            url: 'https://github.com/ricardosantosduarte/',
            alt: 'github-logo',
            img: <Github />,
            fill: state.isDarkMode,
            urlLabel: 'Visit my Github profile!',
        },
    ];

    return (
        <HeaderWrapper>
            <HeaderSection>
                <Text
                    size={'title'}
                    weight={'semi'}
                >
                    #
                    <Text
                        as={'span'}
                        color={'highlight'}
                    >
                        dev
                    </Text>
                </Text>
                <Spacer size={'s'} />
                <TextWrapper>
                    <Toggle
                        eventName="darkModeToggle"
                        isPreviouslySelected={state.isDarkMode}
                        onClick={() =>
                            dispatch({
                                type: ACTION_TYPES.TOGGLE_THEME,
                            })
                        }
                        label="Dark Mode"
                    />
                </TextWrapper>
            </HeaderSection>
            <HeaderSection alignBottom>
                <Spacer />
                <Text
                    align="right"
                    color={'highlight'}
                >
                    {`<Ricardo>`}
                </Text>
                <Spacer size={'xs'} />
                <MoreInfoWrapper>
                    <Spacer size={'s'} />
                    <MoreInfo>
                        <SocialsWrapper>
                            {socials.map((social) => (
                                <SocialLink
                                    id={social.alt}
                                    key={social.url}
                                    href={social.url}
                                    target={'_blank'}
                                    aria-label={social.urlLabel}
                                >
                                    <SocialIcon
                                        css={{ $$fill: '#fff' }}
                                        fill={social.fill}
                                        github={social.alt === 'github-logo'}
                                    >
                                        {social.img}
                                    </SocialIcon>
                                </SocialLink>
                            ))}
                        </SocialsWrapper>
                        <Text size={'subTitle'}>{`</Santos Duarte>`}</Text>
                    </MoreInfo>
                </MoreInfoWrapper>
            </HeaderSection>
        </HeaderWrapper>
    );
};

export { Header };
