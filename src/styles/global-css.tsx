import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0; 
        border: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    ul, ol, li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: inherit;
        font-size: inherit;
    }

    html, body {
        height: 100%;
        line-height: 1;
    }

    body {
        color: ${({ theme }) => theme.colors.fontColor};
        background: ${({ theme }) => theme.colors.backgroundColor};
        font-family: ${({ theme }) => theme.fonts.fontFamily};
        font-size: 16px;
        transition: all .9s ease;
        text-rendering: optimizeLegibility;
    }
`;

export { GlobalStyles };
