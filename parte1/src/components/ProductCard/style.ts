import { styled } from 'styled-components';

export const ContainerCard = styled.section`
    display: flex;
    flex-direction: column;
    gap: .37rem;
    cursor: pointer;

    > header {
        position: relative;
        > img {
            width: 100%;
        }
    }
    > footer {
        display: flex;
        flex-direction: column;
        gap: .38rem;

        > h2 {
            color: ${(props) => props.theme['black']};
            font-size: 1rem;
            font-weight: 700;
        }

        > span {
            color: ${(props) => props.theme['gray']};
            font-family: 'Arimo';
            font-size: 0.75rem;
            font-weight: 400;
            text-decoration-line: strikethrough;
        }

        > h4 {
            color: ${(props) => props.theme['black']};
            font-family: 'Arimo';
            font-size: 0.875rem;
            font-weight: 400;
            text-transform: uppercase;
        }
    }
`;

export const SoldOut = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme['opacity-card']};

    &::after {
        content: 'SOLD OUT.';
        position: absolute;
        font-size: 1.125rem;
        font-weight: 900;
        line-height: 1.0395rem;
        letter-spacing: 0.78188rem;
        text-transform: uppercase;
        top: 45%;
        transform: translateY(-45%);
        transform: rotate(-10.84deg);
        background-color: ${(props) => props.theme['white']};
        width: 101%;
        height: 2.1875rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &::before {
        content: '';
        position: absolute;
        top: 45%;
        transform: translateY(-45%);
        transform: rotate(10.84deg);
        background-color: ${(props) => props.theme['white']};
        width: 101%;
        height: 2.1875rem;
    }
`;