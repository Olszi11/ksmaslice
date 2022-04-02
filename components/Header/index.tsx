import styled from 'styled-components';
import { Container } from 'components/Container';
import Link from 'next/link';
import Image from 'next/image';
import { colors } from 'styles';

interface Navigation {
    createdAt: string;
    publishedAt: string;
    slug: string;
    title: string;
    updatedAt: string;
}

export const Header = ({ navigation }: { navigation: [] }) => {
    const nav = navigation.map(({ attributes, id }: { attributes: Navigation; id: string }) => (
        <li key={id}>
            <Link href={attributes.slug}>
                <a>{attributes.title}</a>
            </Link>
        </li>
    ));

    return (
        <Header.Wrapper>
            <Header.Top>
                <Header.Container size="wide">
                    <Header.TopWrapper>
                        <Header.Logo>
                            <Link href="/">
                                <a>
                                    <Image
                                        src={`/images/logo.png`}
                                        width={112}
                                        height={127}
                                        alt={`Maślice Wrocław Logo`}
                                    />
                                </a>
                            </Link>
                        </Header.Logo>
                        <Header.TopContent>
                            <Header.Heading>Klub Sportowy Maślice Wrocław</Header.Heading>
                            <Header.Paragraph>Trochę więcej niż klub.</Header.Paragraph>
                        </Header.TopContent>
                    </Header.TopWrapper>
                </Header.Container>
            </Header.Top>
            <Header.Bottom>
                <Header.Container size="wide">
                    <Header.Nav>
                        <ul>{nav}</ul>
                    </Header.Nav>
                </Header.Container>
            </Header.Bottom>
        </Header.Wrapper>
    );
};

Header.Wrapper = styled.header`
    display: block;
    position: relative;
`;
Header.Top = styled.div`
    width: 100%;
    padding-top: 10px;
    background-color: ${colors.yellow};
`;
Header.TopWrapper = styled.div`
    display: flex;
`;
Header.TopContent = styled.div`
    margin-top: 8px;
`;
Header.Heading = styled.h1`
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
    margin: 0 0 5px;
`;
Header.Paragraph = styled.p`
    font-size: 20px;
    margin: 0;
    font-style: italic;
    line-height: 30px;
    font-weight: 400px;
`;

Header.Bottom = styled.div`
    display: block;
    text-align: center;
    position: relative;
    z-index: 1;
    margin-top: -47px;
    padding-left: 151px;
    background-color: ${colors.dark};
`;
Header.Logo = styled.div`
    margin: 0 40px 0 0;
    position: relative;
    z-index: 2;
`;

Header.Nav = styled.nav`
    ul {
        display: flex;
        padding: 0;
        list-style: none;
        margin: 0;
        align-items: center;
        justify-content: center;
        gap: 45px;
    }

    li {
        margin: 0;
        display: inline-block;
        & > a {
            color: ${colors.white};
            text-decoration: none;
            font-size: 18px;
            line-height: 1;
            display: block;
            padding: 17px 0;
            transition: color 0.2s;
            &:hover {
                color: ${colors.yellow};
            }
        }
    }
`;
Header.Container = styled(Container)``;
