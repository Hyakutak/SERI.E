import { styled } from 'styled-components';

export const ContainerFloatingWhatsapp = styled.a`
    position: fixed;
    bottom: 3.5rem;
    right: 1.56rem;
    display: flex;
    justify-content: end;
    align-items: end;
    flex-direction: column;

    &:hover {
        > img {
            visibility: hidden;
            height: 0;
        }
        > section {
            visibility: visible;
            height: auto;
        }
    }

    > img {
        height: auto;
        transition: visibility 1s, height 1s ease-in;
    }

    > section {
        position: absolute;
        visibility: hidden;
        height: 0;
        transition: visibility 1s, height 1s ease;
        width: 16.5625rem;
        height: 3.25rem;
        background: ${(props) => props.theme['black']};
        padding: 1rem 1.81rem;
        color: ${(props) => props.theme['white']};
        border-radius: 1.625rem;
        display: flex;
        align-items: center;
        gap: 1.38rem;

        &::after {
            content: '';
            width: 1rem;
            height: 1rem;
            position: absolute;
            right: 0.3rem;
            bottom: 0.2rem;
            z-index: 9;
            background: ${(props) => props.theme['black']};
            transform: rotate(15deg);
        }

        > span {
            font-family: 'Arimo';
            font-size: 0.75rem;
            font-style: italic;
            font-weight: 700;
            line-height: 0.693rem;
            letter-spacing: 0.2625rem;
            text-transform: uppercase;
        }

    }
`;