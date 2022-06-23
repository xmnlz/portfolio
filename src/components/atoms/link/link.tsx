import NextLink from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

interface LinkProps {
    href: string;
    blank?: boolean;
}

const Link: FC<LinkProps> = ({ children, href, blank }) => {
    return (
        <NextLink href={href} passHref>
            {blank ? (
                <StyledLink
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {children}
                </StyledLink>
            ) : (
                <StyledLink href={href}>{children}</StyledLink>
            )}
        </NextLink>
    );
};

const StyledLink = styled.a(({ theme }) => ({
    color: 'inherit',
    transition: 'all 0.2s ease-in-out',
    '&:hover, &:focus': {
        textDecoration: 'underline',
    },
}));

export { Link };
