import { useContext } from "react";

import { StyledScoreboard } from "./Scoreboard.styled";

import createMarkup from "../../helpers/createMarkup";
import QuizContext from "../../contexts/quiz";

const Scoreboard = ({ points, tries, userAnswers }) => {
    const { quit, questions } = useContext(QuizContext);

    return (
        <StyledScoreboard>
            <p>Your results is {points} / {tries}</p>
            <table>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Correct Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map(({ question, answers, correctAnswerIndex }, index) => {
                        return (
                            <tr key={index}>
                                <td dangerouslySetInnerHTML={createMarkup(question)} />
                                <td 
                                    dangerouslySetInnerHTML={createMarkup(answers[correctAnswerIndex])} 
                                    className={`${userAnswers[index] ? 'correct' : 'incorrect'}`}
                                />
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={quit}>
                New Game
            </button>
        </StyledScoreboard>
    );
}

export default Scoreboard;
