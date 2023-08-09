import { styled } from 'styled-components';
import { device } from '../../utils/device';

export const ContainerTopBar = styled.section`
    background: ${(props) => props.theme['background-black']};
    height: 1.875rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & h5 {
        color: ${(props) => props.theme['base-subtitle']};
        font-family: Montserrat;
        font-size: 0.625rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
    }
`;