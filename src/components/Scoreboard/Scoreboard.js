import { useContext } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

import { StyledScoreboard } from "./Scoreboard.styled";

import QuizContext from "../../contexts/quiz";

const Scoreboard = ({ points, tries }) => {
    const { quit } = useContext(QuizContext);

    return (
        <StyledScoreboard>
            <h5>Your result is {points / tries * 100}%</h5>
            <div>
                <p><FaCheck /> {points} correct answers.</p>
                <p><FaTimes /> {tries - points} incorrect answers.</p>
            </div>
            <button onClick={quit}>New Game</button>
        </StyledScoreboard>
    );
}

export default Scoreboard;
