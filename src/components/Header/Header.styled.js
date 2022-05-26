import styled from "styled-components";
import { Flex } from "../../styles/mixins/Flex";

export const StyledHeader = styled.header`
    padding: 3vh 0 3vh;
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

    @media (max-width: 768px) {
        padding: 6vh 0 2vh;
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
        margin-left: 0.5vw;
        padding: 0.4vh;
        transition: 0.2s;

        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.colors.secondaryFont};
            color: ${props => props.theme.colors.primary};
        }
    }
`
