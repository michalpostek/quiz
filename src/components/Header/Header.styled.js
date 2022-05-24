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
    right: 4vw;
    top: 4vh;
    display: flex;

    button {
        background-color: rgba(255, 255, 255, 0.1);
        color: ${props => props.theme.colors.secondaryFont};
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0.2vw;
        padding: 0.5vh;
        transition: 0.2s;

        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.colors.secondaryFont};
            color: ${props => props.theme.colors.primary};
        }
    }
`