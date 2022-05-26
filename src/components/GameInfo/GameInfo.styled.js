import styled from "styled-components";
import { Flex } from "../../styles/mixins/Flex";

export const StyledGameInfo = styled.div`
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.altFont};
    ${Flex({ direction: 'column', justify: 'center', align: 'center' })};
`;

export const ProgressBar = styled.div`
    margin: 0.5vh 0;
    width: max(200px, 14vw);
    height: 1.5vh;
    background: transparent;
    border: 1px solid ${props => props.theme.colors.secondaryFont};
    position: relative;

    ::after {
        transition: .2s;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: ${props => props.progress}%;
        background-color: ${props => props.theme.colors.altFont};
    }
`;
