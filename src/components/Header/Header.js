import { IoMdExit } from "react-icons/io";
import { IoInvertMode } from "react-icons/io5";

import { StyledHeader, ButtonsWrapper } from "./Header.styled";

const Header = ({ toggleColors, quitGame, questions }) => {
    return (
        <StyledHeader>
            <h1>
                Quiz App
            </h1>
            <p>
                A simple Quiz Game built with React, hooks and styled components.
            </p>
            <ButtonsWrapper>
                {questions && (
                    <button onClick={quitGame}>
                        <IoMdExit size={40} />
                    </button>
                )}
                <button onClick={toggleColors}>
                    <IoInvertMode size={40} />
                </button>
            </ButtonsWrapper>
        </StyledHeader>
    );
}

export default Header;
