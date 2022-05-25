import { css } from "styled-components";

export const Flex = ({ direction, justify, align }) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`;
