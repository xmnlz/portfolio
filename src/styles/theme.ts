const baseStyles = {
    fonts: {
        fontSize: '16px',
        fontFamily: 'Montserrat, sans-serif',
        secondaryFontFamily: 'Roboto Mono, monospace',
    },
};

const baseColors = {
    dark: {
        100: '#1B1212',
        200: '#343434',
        300: '#2B2B2B',
    },
    white: {
        100: '#FFFFFF',
        200: '#F5F5F5',
    },
};

const darkTheme = {
    ...baseStyles,
    colors: {
        ...baseColors,
        backgroundColor: baseColors.dark[200],
        themeBackgroundColor: baseColors.dark[300],
        fontColor: baseColors.white[100],
        SecondaryFontColor: baseColors.white[300],
    },
};

const lightTheme = {
    ...baseStyles,
    colors: {
        ...baseColors,
        backgroundColor: baseColors.white[100],
        themeBackgroundColor: baseColors.white[200],
        fontColor: baseColors.dark[100],
        SecondaryFontColor: baseColors.dark[300],
    },
};

export { darkTheme, lightTheme };
