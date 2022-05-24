import styled from "styled-components";

export const StyledTimer = styled.div`
    h6 {
        color: ${props => props.theme.colors.secondaryFont};
        font-size: ${props => props.theme.fontSizes.xxLarge};
    }

    p {
        font-size: ${props => props.theme.fontSizes.small};
    }
`;
