import { styled } from 'styled-components';
import { device } from '../../utils/device';

export const ContainerFooter = styled.footer`
    width: 100%;

    > article {
        padding: 3.5rem 0;
        margin: 0 auto;
        max-width: 73.125rem;
        display: flex;
        justify-content: space-between;

        ${device.tablet} {
            max-width: 100%;
            padding: .7rem 6.25rem;
        }

        ${device.mobile} {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }
    }
`;

export const SubFooter = styled.section`
    background-color: ${(props) => props.theme['black']};
    padding: .7rem 6.25rem;

    > section {
        margin: 0 auto;
        max-width: 73.125rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${device.mobile} {
            flex-direction: column;
            gap: 1rem;
        }

        & aside {
            display: flex;
            gap: 2.5rem;
        }

        & h3 {
            color: ${(props) => props.theme['white']};
            font-family: 'Arimo';
            font-size: 0.875rem;
            font-weight: 400;
        }
    }

`;

export const NavFooter = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.88rem;

    > h4 {
        color: ${(props) => props.theme['black']};
        font-family: 'Arimo';
        font-size: 1rem;
        font-weight: 700;
        line-height: 0.924rem;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
    }

    > ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: .44rem;
        > li {
            > a {
                text-decoration: none;
                color: ${(props) => props.theme['black']};
                font-family: 'Arimo';
                font-size: 0.875rem;
                font-weight: 400;
                letter-spacing: 0.14rem;
            }
        }
    }
`;

export const ContainerSocial = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.88rem;

    > h4 {
        color: ${(props) => props.theme['black']};
        font-family: 'Arimo';
        font-size: 1rem;
        font-weight: 700;
        line-height: 0.924rem;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
    }

    > div {
        display: flex;
        gap: .63rem;

        ${device.mobile} {
            justify-content: center;
        }
    }
`;