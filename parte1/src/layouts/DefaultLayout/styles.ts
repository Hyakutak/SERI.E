import { styled } from 'styled-components';

export const LayoutContainer = styled.div`
    max-width: 100vw;
    overflow: hidden;

    > .is-sticky {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        background: ${(props) => props.theme['background-black']};
    }
`;