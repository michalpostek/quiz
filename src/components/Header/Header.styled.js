import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 2vh 0;
    position: relative;

    h1 {
        font-size: ${props => props.theme.fontSizes.xxLarge};
        font-weight: 400;
        margin: 1vh 0;
    }

    p {
        font-size: ${props => props.theme.fontSizes.medium};
        color: ${props => props.theme.colors.secondaryFont};
    }
`;

export const ButtonsWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    button {
        
    }
`
