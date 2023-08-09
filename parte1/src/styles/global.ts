import { createGlobalStyle } from 'styled-components';
import { device } from '../utils/device';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ${device.tablet} {
    html{
        font-size: 87.5%;
    }
    main{
        padding: 0 1rem;
    }
  }
`;