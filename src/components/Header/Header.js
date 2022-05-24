import { StyledHeader, ButtonsWrapper } from "./Header.styled";

const Header = ({ toggleColors, quitGame }) => {
    return (
        <StyledHeader>
            <h1>Quiz App</h1>
            <p>A simple Quiz Game built with React, hooks and styled components.</p>
            <ButtonsWrapper>
                <button onClick={toggleColors}>Toggle</button>
                <button onClick={quitGame}>Menu</button>
            </ButtonsWrapper>
        </StyledHeader>
    );
}

export default Header;
