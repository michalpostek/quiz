import { useContext } from "react";

import { StyledScoreboard } from "./Scoreboard.styled";

import QuizContext from "../../contexts/quiz";

const Scoreboard = ({ points, tries }) => {
    const { quit } = useContext(QuizContext);

    return (
        <StyledScoreboard>
            <p>Your results is {points} / {tries}</p>
            <button onClick={quit}>
                New Game
            </button>
        </StyledScoreboard>
    );
}

export default Scoreboard;
