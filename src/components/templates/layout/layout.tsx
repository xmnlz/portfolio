import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';
import { RecoilRoot } from 'recoil';
import { FC, useEffect } from 'react';

import { useThemeStyle } from '@hooks/useThemeStyle';
import { GlobalStyles } from 'src/styles/global-css';
import { darkTheme, lightTheme } from 'src/styles/theme';
import { NavHeader } from '@components/organisms';
import { Container } from '@components/atoms';

interface DefaultLayoutProps {}

const BaseLayout: FC<DefaultLayoutProps> = ({ children }) => {
    const { theme: themeStyle } = useThemeStyle();

    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
            </Head>
            <ThemeProvider
                theme={themeStyle === 'dark' ? darkTheme : lightTheme}
            >
                <IconContext.Provider value={{}}>
                    <GlobalStyles />
                    <RootDiv>
                        <Container>
                            <NavHeader />
                            {children}
                        </Container>
                    </RootDiv>
                </IconContext.Provider>
            </ThemeProvider>
        </>
    );
};

const RootDiv = styled.div({
    width: '100%',
    height: '100vh',
});

export { BaseLayout };
