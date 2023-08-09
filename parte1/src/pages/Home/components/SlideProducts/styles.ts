import { styled } from 'styled-components';
import { device } from '../../../../utils/device';

export const ContainerSlide = styled.section`
    margin: 4rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.63rem;

    > header {
        text-align: center;
        > h2 {
            color: ${(props) => props.theme['black']};
            font-size: 1.75rem;
            font-weight: 700;
            letter-spacing: 0.28rem;
            text-transform: uppercase;
        }
    }

    > .slick-slider {
        max-width: 73.125rem;
        margin: 0 auto;

        ${device.tablet} {
            max-width: 100%;
            padding: 0 3rem;
        }

        > .slick-list {
            overflow: visible;

            > .slick-track {
                display: flex;
                gap: .37rem;
            }
        }

        > .slick-arrow {
            top: -.6rem;
            color: ${(props) => props.theme['black']};
        }

        > .slick-next {
            right: -3rem;
            ${device.tablet} {
                right: 1rem;
            }
        }

        > .slick-prev {
            left: -3rem;

            ${device.tablet} {
                left: 1rem;
            }
        }
    }
`;