import { styled } from 'styled-components';
import { device } from '../../utils/device';

export const ContainerHeader = styled.header`
    width: 100vw;
    position: absolute;
    top: 1.875rem;
    z-index: 2;
    padding: 1rem 6.25rem;

    ${device.mobile} {
        padding: 1rem;
        position: relative;
        top: 0;
        background-color: ${(props) => props.theme['background-black']};
    }

    > section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 73.125rem;
        margin: 0 auto;

        ${device.mobile} {
            max-width: 100%;
            justify-content: end;
            gap: 1rem;

            > .iconActive {

                > .hamburguer {
                    &::after {
                        top: -3rem;
                        right: -80vw;
                        background: ${(props) => props.theme['black']};
                        transform: rotate(225deg);
                    }

                    &::before {
                        top: -3rem;
                        right: -80vw;
                        background: ${(props) => props.theme['black']};
                        transform: rotate(135deg);
                    }
                }
            }

            > .menuOpen {
                display: flex;
                position: fixed;
                left: 0;
                top: 0;
                background: ${(props) => props.theme['white']};
                height: 100vh;
                width: 90vw;
                > nav {
                    flex-direction: column;
                    padding: 2rem;

                    > a {
                        color: ${(props) => props.theme['black']};
                    }
                }
            }
        }
        
        & nav {
            display: flex;
            gap: 1rem;

            ${device.mobile} {
                display: none;
            }

            & a {
                color: ${(props) => props.theme['white']};
                font-size: 0.875rem;
                font-weight: 700;
                text-transform: uppercase;
                text-decoration: none;
            }
        }
    }
`;

export const HeaderIcons = styled.header`
    display: flex;
    gap: .63rem;

    & div {
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme['border-color']};
        padding: 0.75rem 0.5rem;
        width: 11.625rem;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme['white']};

        ${device.mobileL} {
            display: none;
        }

        & input {
            border: 0;
            background: transparent;
            font-family: 'Nunito';
            font-size: 0.75rem;
            font-weight: 400;
            letter-spacing: 0.03125rem;

            &::placeholder {
                opacity: .32;
            }
        }
    }

    & a {
        color: ${(props) => props.theme['white']};
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: .5rem;
        font-family: 'Jost';
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.03125rem;
        display: flex;
        gap: .25rem;
    }
`;

export const IconHamburger = styled.section`
    position: absolute;
    z-index: 4;
    left: 1%;
    width: fit-content;
    height: 3.14rem;
    cursor: pointer;
    display: none;

    ${device.mobileL} {
        display: flex;
    }

    > .hamburguer {
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translateY(-50%);
        width: 2rem;
        height: 0.3rem;
        background-color: ${(props) => props.theme['white']};
        transition: .5s;

        &::before {
            top: -8px;
            content: '';
            position: absolute;
            width: 2rem;
            height: 0.3rem;
            background-color: ${(props) => props.theme['white']};
            transition: .5s;
        }

        &::after {
            top: 8px;
            content: '';
            position: absolute;
            width: 2rem;
            height: 0.3rem;
            background-color: ${(props) => props.theme['white']};
            transition: .5s;
        }
    }

`;

export const SideBarNav = styled.aside`
    display: none;

    ${device.mobileL} {
        & nav {
            display: flex !important;
        }
    }
    
`;