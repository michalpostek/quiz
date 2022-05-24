import styled from "styled-components";

export const StyledScoreboard = styled.div`
    p {
        font-size: ${props => props.theme.fontSizes.xxLarge};
    }

    button {
        margin-top: 4vh;
        font-size: ${props => props.theme.fontSizes.medium};
        padding: 1vh 1vw;
        background: none;
        border: 2px solid ${props => props.theme.colors.primaryFont};
        border-radius: 1vw;
        transition: 0.4s;
        color: ${props => props.theme.colors.primaryFont};

        :hover {
            cursor: pointer;
            border-color: ${props => props.theme.colors.secondaryFont};
            color: ${props => props.theme.colors.primary};
            background: ${props => props.theme.colors.secondaryFont};
        }
    }
`;
