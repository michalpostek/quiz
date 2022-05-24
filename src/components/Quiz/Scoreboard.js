import { useContext } from "react";

import { StyledScoreboard } from "../../styles/Quiz.styled";

import QuizContext from "../../contexts/quiz";

const Scoreboard = ({ points, tries }) => {
    const { quit } = useContext(QuizContext);
    const result = Math.round(points / tries * 100);

    return (
        <StyledScoreboard>
            <p>Your score is {result}%</p>
            <button onClick={quit}>
                New Game
            </button>
        </StyledScoreboard>
    );
}

export default Scoreboard;
