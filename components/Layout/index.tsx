import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import styled from 'styled-components';

import { ReactNode } from 'react';

interface PageLayoutProps {
    children: ReactNode;
    navigation: [];
}

export const Layout = ({ children, navigation, ...restProps }: PageLayoutProps) => {
    return (
        <>
            <Header navigation={navigation} />
            <Layout.Wrapper {...restProps}>{children}</Layout.Wrapper>
            <Footer />
        </>
    );
};
Layout.Wrapper = styled.main``;
