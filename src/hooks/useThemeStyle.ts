import { useRecoilState } from 'recoil';
import { isServer } from '~/lib/isServer';
import { themeSelector } from '~/store/selectors/theme-selector';

const useThemeStyle = (): {
    theme: string;
    changeTheme: () => void;
} => {
    let themeLocalStorage = !isServer
        ? localStorage.getItem('theme') || 'dark'
        : 'dark';
    const [theme, setTheme] = useRecoilState(themeSelector);

    if (!(themeLocalStorage === 'dark' || themeLocalStorage === 'light')) {
        !isServer ? localStorage.setItem('theme', 'dark') : null;
        setTheme('dark');
    }

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            !isServer ? localStorage.setItem('theme', 'light') : null;
        } else {
            setTheme('dark');
            !isServer ? localStorage.setItem('theme', 'dark') : null;
        }
    };

    return { theme, changeTheme };
};

export { useThemeStyle };
