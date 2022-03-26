import { media } from 'services/media';
import { colors, fonts } from 'styles';
import { createGlobalStyle } from 'styled-components';

/**
 * Styles that are supposed to be applied globally (e.g body, typography)
 */
export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: ${colors.white};
        font-size: 16px;
        line-height: 1.5;
        font-family: ${fonts.redhat};
        color: ${colors.dark};

        ${media.min('md')} {
            font-size: 20px;
            line-height: 1.6;
        }
    }

    ::selection {
        background: ${colors.yellow};
        opacity: 0.3;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${fonts.redhat};
        color: ${colors.dark};
        margin: 0 0 16px;

        ${media.min('md')} {
            margin-bottom: 8px;
        }
    }

    h1 {
        line-height: 1;
        margin-bottom: 32px;

        ${media.max('md')} {
            font-size: 34px;
        }

        ${media.min('md')} {
            font-size: 80px;
        }
    }

    h2 {
        line-height: 1.15;
        margin-bottom: 24px;

        ${media.max('md')} {
            font-size: 24px;
        }

        ${media.min('md')} {
            font-size: 56px;
            margin-bottom: 16px;
        }
    }

    h3 {
        line-height: 1;

        ${media.max('md')} {
            font-size: 18px;
        }

        ${media.min('md')} {
            font-size: 35px;
        }
    }

    h4 {
        line-height: 1;

        ${media.max('md')} {
            font-size: 16px;
        }

        ${media.min('md')} {
            font-size: 24px;
        }
    }

    h5 {
        line-height: 1;
        font-weight: 600;

        ${media.max('md')} {
            font-size: 14px;
        }

        ${media.min('md')} {
            font-size: 18px;
        }
    }

    h6 {
        font-size: 14px;
        font-weight: 500;
    }

    p {
        margin-top: 0;
        margin-bottom: 24px;

        ${media.min('lg')} {
            margin-bottom: 32px;
        }

        &:last-child {
            margin-bottom: 48px;
        }

        &:empty {
            display: none;
        }
    }

    a:not([class]) {
        text-decoration: underline;
        color: ${colors.yellow};

        &:hover {
            color: ${colors.yellow};
        }
    }

    img {
        max-width: 100%;
        height: auto;
    }
`;
