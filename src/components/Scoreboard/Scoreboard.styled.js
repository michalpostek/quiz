import styled from "styled-components";

export const StyledScoreboard = styled.div`
    table {
        border-collapse: collapse;
        margin: 4vh auto;
        border: 2px solid ${props => props.theme.colors.primaryFont};

        th, td {
            padding: 1vh;
            border: 2px solid ${props => props.theme.colors.primaryFont};
        }

        .correct {
            color: ${props => props.theme.colors.correct};
        }

        .incorrect {
            color: ${props => props.theme.colors.incorrect};
        }
    }

    p {
        font-size: ${props => props.theme.fontSizes.xxLarge};
        color: ${props => props.theme.colors.secondaryFont};
    }

    button {
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
