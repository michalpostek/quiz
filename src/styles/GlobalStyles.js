import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-bx:
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primaryFont};
        text-align: center;

        @media (max-width: 768px) {
            font-size: 75%;
        }
    }
`;

export default GlobalStyles;
