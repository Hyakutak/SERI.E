import { styled } from 'styled-components';

export const ContainerBannerCentral = styled.section`
    text-align: center;
    margin-top: 2.06rem;
    display: flex;
    flex-direction: column;
    gap:1.5rem;

    > h4 {
        color: ${(props) => props.theme['black']};
        font-size: 1.75rem;
        font-weight: 700;
        letter-spacing: 0.28rem;
        text-transform: uppercase;
    }

    > img {
        width: 100%;
    }
`;