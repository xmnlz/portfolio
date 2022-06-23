import { BaseLayout } from '@components/templates';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <RecoilRoot>
            <BaseLayout>
                <Component {...pageProps} />
            </BaseLayout>
        </RecoilRoot>
    );
};

export default App;
