import { useContext } from "react";

import { AnswersWrapper } from "./Quiz.styled";

import QuizContext from "../../contexts/quiz";
import createMarkup from "../../helpers/createMarkup";

const Answers = ({ handleCheckAnswer, isAnswered }) => {
    const { questions, tries } = useContext(QuizContext);
    const { answers, correctAnswerIndex } = questions[tries];

    return (
        <AnswersWrapper>
            {answers.map((answer, index) => {
                const correct = index === correctAnswerIndex;
                const classes = isAnswered
                    ? correct ? 'correct' : 'incorrect'
                    : '';

                return (
                    <button 
                        dangerouslySetInnerHTML={createMarkup(answer)} 
                        key={index} 
                        onClick={() => handleCheckAnswer(correct)}
                        className={classes}
                    />
                );
            })}
        </AnswersWrapper>
    );
}

export default Answers;
