import styled from 'styled-components';
import Link from 'next/link';

import { FC } from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { useWindowSize } from '@hooks/useWindowSize';
import { Container } from '@components/atoms/container/container';
import { BurgerMenu } from '../burger-menu/burger-menu';
import { useThemeStyle } from '~/hooks';

const NavHeader: FC = () => {
    const { width } = useWindowSize();
    const { theme, changeTheme } = useThemeStyle();

    const handleThemeSwitcher = () => changeTheme();

    return (
        <Container>
            <Header>
                <Link href='/'>
                    <HeaderButton>/xmnlz</HeaderButton>
                </Link>

                <HeaderStack>
                    {width <= 560 ? (
                        <BurgerMenu />
                    ) : (
                        <>
                            <Link href='/about'>
                                <HeaderButton>/about</HeaderButton>
                            </Link>

                            <Link href='/skills'>
                                <HeaderButton>/skills</HeaderButton>
                            </Link>
                        </>
                    )}
                </HeaderStack>
                <HeaderThemeSwitcher onClick={handleThemeSwitcher}>
                    {theme === 'dark' ? <LightThemeIcon /> : <DarkThemeIcon />}
                </HeaderThemeSwitcher>
            </Header>
        </Container>
    );
};

const Header = styled.header(({ theme }) => ({
    fontFamily: theme.fonts.secondaryFontFamily,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '3rem',
    padding: '3rem',
}));

const HeaderStack = styled.div({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
});

const HeaderButton = styled.a(({ theme }) => ({
    cursor: 'pointer',
    borderRadius: '20px',
    marginLeft: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.8rem',
    margin: '.5rem',
    '&:hover': {
        background: theme.colors.themeBackgroundColor,
    },
}));

const HeaderThemeSwitcher = styled.button(({ theme }) => ({
    borderRadius: '5px',
    padding: '.5rem',
    background: theme.colors.themeBackgroundColor,
    color: theme.colors.fontColor,
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
}));

const DarkThemeIcon = styled(FaRegSun)({
    cursor: 'pointer',
});

const LightThemeIcon = styled(FaRegMoon)({
    cursor: 'pointer',
});

export { NavHeader };
