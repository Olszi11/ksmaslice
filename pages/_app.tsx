import { GlobalStyle } from 'styles/global';
import type { AppProps } from 'next/app';
import { Layout } from 'components/Layout';
interface Props {
    data: [];
}
function MyApp({ Component, pageProps, data }: AppProps & Props) {
    return (
        <>
            <GlobalStyle />
            <Layout navigation={data}>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

MyApp.getInitialProps = async () => {
    const { API_BASE_URL } = process.env;
    const res = await fetch(`${API_BASE_URL}/navigations`);
    const navigation = await res.json();
    const { data } = navigation;
    return { data };
};

export default MyApp;
