import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ContainerProps {
    size?: keyof typeof containerSizes;
    children: ReactNode;
}

const containerSizes = {
    default: 850,
    wide: 1180,
    full: 1920,
};

export const Container = ({ size, children, ...restProps }: ContainerProps) => (
    <Container.Div size={size} {...restProps}>
        {children}
    </Container.Div>
);

Container.Div = styled.div<Pick<ContainerProps, 'size'>>`
    margin: 0 auto;
    padding: 0 20px;
    ${({ size }) => size && `max-width: ${containerSizes[size]}px`}
`;
