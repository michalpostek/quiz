import styled from "styled-components";

import { Flex } from "../../styles/mixins/Flex";

export const StyledQuestion = styled.div`
    h4 {
        font-size: ${props => props.theme.fontSizes.xLarge};
        min-height: 12vh;
        ${Flex({ direction: 'row', justify: 'center', align: 'center' })};

        @media (max-width: 768px) {
            font-size: ${props => props.theme.fontSizes.large};
            margin: 1vh 0;
            min-height: 16vh;
        }
    }
`;

export const AnswersWrapper = styled.div`
    margin: 2vh 0;
    display: grid;
    grid-template-columns: repeat(2, max(360px, 28vw));
    grid-template-rows: repeat(2, max(180px, 22vh));
    justify-content: center;
    grid-gap: 2vh;

    button {
        font-size: ${props => props.theme.fontSizes.large};
        padding: 2vh 1vw;
        border-radius: 1vw;
        opacity: 0.8;
        transition: 0.2s;

        &.correct {
            background: ${props => props.theme.colors.correct};
            opacity: 1;
        }

        &.incorrect {
            background: ${props => props.theme.colors.incorrect};
            opacity: 0.8;

            &:hover {
                opacity: 0.8;
            }
        }

        :hover {
            opacity: 1;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
`
