import { Container, Modal } from '@components/atoms';
import styled from 'styled-components';

const AboutPage = () => {
    return (
        <AboutWrapper>
            <Container>
                <Modal>
                    <InnerModalWrapper>
                        <ModalTitle>Hey there!</ModalTitle>
                        <ModalDescription>
                            I’m a full-stack self-taught developer from the
                            Ukraine. I take into consideration the user
                            experience while writing reusable and efficient
                            code. I passionately combine good design,
                            technology, and innovation in all my projects, which
                            I like to accompany from the first idea to release.
                            I like to spend time designing and creating projects
                            to solve important problems. Since Currently, I’m an
                            unemployed high-school student who develops
                            full-stack applications.
                        </ModalDescription>
                        <ModalTitle>A bit about me</ModalTitle>
                        <ModalDescription>
                            I&apos;m constantly learning and perfecting my skill
                            as a developer every day. When I&apos;m not coding I
                            play games, reading books, watch some show on
                            Netflix, or if the weather&apos;s good, walking with
                            friends.
                        </ModalDescription>
                    </InnerModalWrapper>
                </Modal>
            </Container>
        </AboutWrapper>
    );
};

const AboutWrapper = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '50px',
});

const InnerModalWrapper = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

const ModalTitle = styled.h1({
    fontWeight: '600',
    padding: '.50rem',
    fontSize: '1.30rem',
    textAlign: 'center',

    '@media screen and (max-width: 1024px)': {
        fontSize: '1.20rem',
    },

    '@media screen and (max-width: 768px)': {
        fontSize: '1rem',
    },

    '@media screen and (max-width: 425px)': {
        fontSize: '.90rem',
    },
});

const ModalDescription = styled.p({
    margin: '1rem',
    lineHeight: '1.75rem',
    fontSize: '1.25rem',
    letterSpacing: '1px',
    wordSpacing: '4px',
    textAlign: 'center',

    '@media screen and (max-width: 1024px)': {
        fontSize: '1rem',
    },

    '@media screen and (max-width: 768px)': {
        fontSize: '.75rem',
    },

    '@media screen and (max-width: 425px)': {
        lineHeight: '1.25rem',
    },
});

export default AboutPage;
