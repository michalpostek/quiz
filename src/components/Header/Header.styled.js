import styled from "styled-components";
import { Flex } from "../../styles/mixins/Flex";

export const StyledHeader = styled.header`
    padding: 5vh 0 2vh;
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
    top: 2vh;
    display: flex;

    button {
        ${Flex({ direction: 'row', justify: 'center', align: 'center' })};
        background-color: rgba(255, 255, 255, 0.1);
        color: ${props => props.theme.colors.secondaryFont};
        border: none;
        border-radius: 50%;
        margin: 0 0.2vw;
        padding: 0.4vh;
        transition: 0.2s;

        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.colors.secondaryFont};
            color: ${props => props.theme.colors.primary};
        }
    }
`
