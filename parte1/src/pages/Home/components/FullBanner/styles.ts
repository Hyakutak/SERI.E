import { styled } from 'styled-components';
import { device } from '../../../../utils/device';

export const ContainerFullBanner = styled.section`
    position: relative;
    max-height: 41.875rem;
    overflow: hidden;

    &:hover {
        > footer {
            display: flex;
        }
    }

    > footer {
        position: absolute;
        bottom: 4.5rem;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: column;
        align-items: center;
        gap: 1.375rem;
        max-width: 55rem;
        width: 100%;
        display: none;

        & h4 {
            color: ${(props) => props.theme['white']};
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: 1.2rem;
            text-transform: uppercase;

            ${device.mobile} {
                font-size: 1rem;
                text-align: center;
            }
        }

        & a {
            color: ${(props) => props.theme['white']};
            font-size: 0.75rem;
            font-style: italic;
            font-weight: 800;
            letter-spacing: 0.18rem;
            text-transform: uppercase;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: .81rem;
        }
    }
`;