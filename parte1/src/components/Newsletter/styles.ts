import { styled } from 'styled-components';
import { device } from '../../utils/device';

export const ContainerNewsletter = styled.aside`
    width: 100%;
    border-top: 1px solid ${(props) => props.theme['background-black']};
    border-bottom: 1px solid ${(props) => props.theme['background-black']};
    & article {
        padding: 1rem 0;
        margin: 0 auto;
        max-width: 73.125rem;
        display: flex;
        align-items: center;
        gap: 1rem;

        ${device.tablet} {
            max-width: 100%;
            padding: .7rem 6.25rem;
        }

        ${device.mobile} {
            flex-direction: column;
            text-align: center;
        }

        & header {
            & h2 {
                color: ${(props) => props.theme['black']};
                font-family: 'Arimo';
                font-size: 1.5rem;
                font-weight: 700;
                text-transform: uppercase;
            }
            & span {
                color: ${(props) => props.theme['black']};
                font-family: 'Arimo';
            }
        }

        & label {
           flex: 1;
           height: 2.5rem;
           border: 1px solid ${(props) => props.theme['newsletter']};
           display: flex;
           align-items: center;
           gap: .94rem;
           padding: .69rem 1.12rem;
           color: ${(props) => props.theme['newsletter']};

           & input {
                all: unset;
                cursor: pointer;
                color: ${(props) => props.theme['newsletter']};
                font-size: 0.75rem;
           }
        }

        & button {
            all: unset;
            cursor: pointer;
            width: 7rem;
            height: 2.5rem;
            background: ${(props) => props.theme['black']};
            color: ${(props) => props.theme['white']};
            text-align: center;
            font-size: 0.75rem;
            font-weight: 600;
        }
    }
`;