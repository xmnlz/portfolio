import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { FC, useState } from 'react';
import { Link } from '@components/atoms';

const BurgerMenu: FC = () => {
    const [enable, setEnable] = useState(false);
    const handleMenu = () => setEnable(!enable);

    return (
        <>
            <BurgerMenuOpenIcon onClick={handleMenu} />
            {enable ? (
                <BurgerMenuWrapper>
                    <BurgerMenuHeader>
                        <BurgerMenuCloseIcon onClick={handleMenu} />
                    </BurgerMenuHeader>
                    <BurgerMenuContent>
                        <BurgerMenuSpan onClick={handleMenu}>
                            <Link href='/about'>/about</Link>
                        </BurgerMenuSpan>
                        <BurgerMenuSpan onClick={handleMenu}>
                            <Link href='/skills'>/skills</Link>
                        </BurgerMenuSpan>
                    </BurgerMenuContent>
                </BurgerMenuWrapper>
            ) : null}
        </>
    );
};

const BurgerMenuWrapper = styled.div(({ theme }) => ({
    position: 'fixed',
    background: theme.colors.backgroundColor,
    color: theme.colors.fontColor,
    padding: '1rem',
    zIndex: '10',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
}));

const BurgerMenuHeader = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const BurgerMenuContent = styled.div({
    marginTop: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
});

const BurgerMenuSpan = styled.span({
    fontSize: '4rem',
    margin: '1rem',
});

const BurgerMenuCloseIcon = styled(MdClose)({
    margin: '1rem',
    fontSize: '1.5rem',
    cursor: 'pointer',
});

const BurgerMenuOpenIcon = styled(MdMenu)({
    margin: '1rem',
    fontSize: '1.5rem',
    cursor: 'pointer',
});

export { BurgerMenu };
