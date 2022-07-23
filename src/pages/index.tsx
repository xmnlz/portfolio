import styled from 'styled-components';
import Image from 'next/image';

import { Link } from '@components/atoms';
import { FC } from 'react';
import { ImGithub, ImSpotify, ImTwitter } from 'react-icons/im';

const HomePage: FC = () => (
    <HomeWrapper>
        <AvatarImage
            priority={true}
            src='https://github.com/xmnlz.png?size=200'
            width='200'
            height='200'
        />
        <TextWrapper>
            <Title>Hey, I&apos;m xmnlz</Title>
            <Description>Self-taught Software Engineer</Description>
        </TextWrapper>
        <IconStack>
            <Link href='https://github.com/xmnlz' blank={true}>
                <GithubIcon />
            </Link>
            <Link
                href='https://open.spotify.com/user/c1gklfz368jzx9zudnpn41qta?si=f059f45ab0d9443c'
                blank={true}
            >
                <SpotifyIcon />
            </Link>
            <Link href='https://twitter.com/xmnlz4' blank={true}>
                <TwitterIcon />
            </Link>
        </IconStack>
    </HomeWrapper>
);

const HomeWrapper = styled.div({
    padding: '1rem',
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '200px',
});

const AvatarImage = styled(Image)(({ theme }) => ({
    borderRadius: '50%',
    userSelect: 'none',
    border: `3px solid ${theme.colors.fontColor} !important`,
}));

const TextWrapper = styled.div({
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

const Title = styled.h1({
    fontSize: '5rem',
    fontWeight: '700',
    margin: '1rem',
    textAlign: 'center',

    '@media screen and (max-width: 1024px)': {
        fontSize: '4rem',
    },

    '@media screen and (max-width: 768px)': {
        fontSize: '2.50rem',
    },

    '@media screen and (max-width: 425px)': {
        fontSize: '1.50rem',
    },
});

const Description = styled.h4({
    fontSize: '3rem',
    fontWeight: '400',
    margin: '1rem',
    textAlign: 'center',

    '@media screen and (max-width: 1024px)': {
        fontSize: '2rem',
    },

    '@media screen and (max-width: 768px)': {
        fontSize: '1.25rem',
    },

    '@media screen and (max-width: 425px)': {
        fontSize: '1rem',
    },
});

const IconStack = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: '20px',
    background: theme.colors.themeBackgroundColor,
    alignItems: 'center',
    fontSize: '2rem',

    '@media screen and (max-width: 1024px)': {
        fontSize: '2rem',
    },

    '@media screen and (max-width: 768px)': {
        fontSize: '1.50rem',
    },

    '@media screen and (max-width: 425px)': {
        fontSize: '1.25rem',
    },
}));

const SpotifyIcon = styled(ImSpotify)({
    margin: '1rem',
    color: '#1ed760',

    '@media screen and (max-width: 425px)': {
        margin: '.75rem',
    },
});

const GithubIcon = styled(ImGithub)({
    margin: '1rem',

    '@media screen and (max-width: 425px)': {
        margin: '.75rem',
    },
});

const TwitterIcon = styled(ImTwitter)({
    margin: '1rem',
    color: '#1d9bf0',

    '@media screen and (max-width: 425px)': {
        margin: '.75rem',
    },
});

export default HomePage;
