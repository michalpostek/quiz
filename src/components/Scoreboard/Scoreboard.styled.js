import styled from "styled-components";

import { Flex } from "../../styles/mixins/Flex";

export const StyledScoreboard = styled.div`
    margin: 6vh 0;
    ${Flex({ direction: 'column', justify: 'center', align: 'center' })};

    h5 {
        font-size: ${props => props.theme.fontSizes.xLarge};
        margin: 2vh 0;
    }

    p {
        font-size: ${props => props.theme.fontSizes.medium};
        margin: 1vh 0;
        ${Flex({ direction: 'row', justify: 'start', align: 'center' })};

        svg {
            font-size: ${props => props.theme.fontSizes.medium};
            margin: 0 0.5vw;
        }

        &:nth-of-type(1) svg {
            color: ${props => props.theme.colors.correct};
        }

        &:nth-of-type(2) svg {
            color: ${props => props.theme.colors.incorrect};
        }
    }

    button {
        font-size: ${props => props.theme.fontSizes.medium};
        padding: 1vh 1vw;
        background: none;
        border: 2px solid ${props => props.theme.colors.primaryFont};
        border-radius: 1vw;
        transition: 0.4s;
        color: ${props => props.theme.colors.primaryFont};
        margin: 2vh 0;

        :hover {
            cursor: pointer;
            border-color: ${props => props.theme.colors.secondaryFont};
            color: ${props => props.theme.colors.primary};
            background: ${props => props.theme.colors.secondaryFont};
        }
    }
`;
