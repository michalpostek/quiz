import styled from "styled-components";

export const StyledHome = styled.div`
    h2 {
        font-size: ${props => props.theme.fontSizes.xLarge};
        margin: 2vh 0;
    }
`;

export const CategoriesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-auto-rows: 1fr;

    button {
        font-size: ${props => props.theme.fontSizes.medium};
        padding: 2vh 1vw;
        border-radius: 0.5vw;
        margin: 0.5vh;
        opacity: 0.8;
        transition: 0.2s;
        
        :hover {
            cursor: pointer;
            opacity: 1;
        }
    }
`;

export const Message = styled.p`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.large};
`;
