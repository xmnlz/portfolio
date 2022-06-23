import { atom } from 'recoil';
import { isServer } from '~/lib/isServer';

export type ThemeType = 'dark' | 'light';

const getDefaultTheme = (): ThemeType => {
    if (isServer) return 'dark';
    return (localStorage.getItem('theme') || 'dark') as ThemeType;
};

export const themeState = atom<ThemeType>({
    key: 'themeState',
    default: getDefaultTheme(),
});
