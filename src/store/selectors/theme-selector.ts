import { selector } from 'recoil';
import { themeState, ThemeType } from '../atoms/theme-atom';

export const themeSelector = selector<ThemeType>({
    key: 'themeSelector',
    get: ({ get }) => {
        return get(themeState);
    },
    set: ({ set }, newValue) => {
        if (newValue !== 'dark' && newValue !== 'light') {
            set(themeState, 'dark');
        } else if (newValue === 'dark') {
            set(themeState, 'dark');
        } else {
            set(themeState, 'light');
        }
    },
});
