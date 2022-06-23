import { FC } from 'react';
import styled from 'styled-components';

const Container: FC = ({ children }) => {
    return <ContainerWrapper>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div({
    maxWidth: 940,
    margin: '0px auto',
});

export { Container };
