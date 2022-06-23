import { Container, Modal } from '@components/atoms';
import { FC } from 'react';
import styled from 'styled-components';

const SkillsPage: FC = () => {
    const SkillsItem: Array<string> = [
        'Babel',
        'Webpack',
        'React & Next.js',
        'Golang',
        'Postgres',
        'Redis',
        'TypeScript',
        'Yarn',
        'styled-components',
        'Docker',
        'Fiber',
        'Bash',
        'Git & GitHub',
        'DigitalOcean',
        'Visual Studio Code',
        'HTML & XML',
        'Kubernetes',
        'SQL',
        'CSS & SCSS',
        'Chakra-ui',
    ];
    return (
        <Modal>
            <Container>
                <ModalInnerWrapper>
                    <ModalTitle>Skills page</ModalTitle>
                    <ModalDescription>
                        You can find the list of my top skills below. I&apos;m
                        also open to learn more frameworks, libraries,
                        languages, etc!
                    </ModalDescription>
                    <SkillsModal>
                        {SkillsItem.map((item) => {
                            return (
                                <SkillsModalItem key={item}>
                                    <span>{item}</span>
                                </SkillsModalItem>
                            );
                        })}
                    </SkillsModal>
                </ModalInnerWrapper>
            </Container>
        </Modal>
    );
};

const ModalInnerWrapper = styled.div({
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

const ModalTitle = styled.span({
    padding: '1rem',
    fontSize: '1.5rem',
    fontWeight: '550',
    textAlign: 'center',

    '@media screen and (max-width: 768px)': {
        fontSize: '1.3rem',
    },

    '@media screen and (max-width: 425px)': {
        fontSize: '1rem',
    },
});

const ModalDescription = styled.p({
    padding: '1rem',
    lineHeight: '1.50rem',
    fontSize: '1.3rem',
    textAlign: 'center',

    '@media screen and (max-width: 425px)': {
        fontSize: '1rem',
    },
});

const SkillsModal = styled.div({
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(5, 1fr)',
    rowGap: '.8rem',

    '@media screen and (max-width: 1024px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
    },

    '@media screen and (max-width: 768px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },

    '@media screen and (max-width: 425px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },

    '@media screen and (max-width: 375px)': {
        gridTemplateColumns: 'repeat(1, 1fr)',
    },
});

const SkillsModalItem = styled.div(({ theme }) => ({
    padding: '1rem',
    borderRadius: '20px',
    textAlign: 'center',

    '&:hover': {
        background: theme.colors.backgroundColor,
    },
}));

export default SkillsPage;
