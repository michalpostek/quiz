import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding: 4vh 0;

    p {
        text-align: right;
        font-size: ${props => props.theme.fontSizes.small};

        a {
            color: ${props => props.theme.colors.secondaryFont};
        }
    }
`;
