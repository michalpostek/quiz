import { VscColorMode, VscHome } from "react-icons/vsc";

import { StyledHeader, ButtonsWrapper } from "./Header.styled";

const Header = ({ toggleColors, quitGame }) => {
    return (
        <StyledHeader>
            <h1>Quiz App</h1>
            <p>A simple Quiz Game built with React, hooks and styled components.</p>
            <ButtonsWrapper>
                <button onClick={toggleColors}>{<VscColorMode size={40} />}</button>
                <button onClick={quitGame}>{<VscHome size={40} />}</button>
            </ButtonsWrapper>
        </StyledHeader>
    );
}

export default Header;
