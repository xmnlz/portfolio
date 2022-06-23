import { FC } from 'react';
import styled from 'styled-components';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
    return <Wrapper>Page Not Found</Wrapper>;
};

const Wrapper = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: '300px',
    padding: '1rem',
}));

export { NotFound };
