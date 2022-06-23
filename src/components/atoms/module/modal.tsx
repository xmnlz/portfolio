import { FC } from 'react';
import styled from 'styled-components';

const Modal: FC = ({ children }) => {
    return <ModuleWrapper>{children}</ModuleWrapper>;
};

const ModuleWrapper = styled.div(({ theme }) => ({
    background: theme.colors.themeBackgroundColor,
    borderRadius: '10px',
    margin: '1rem',
    padding: '1rem',
}));

export { Modal };
