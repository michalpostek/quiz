import { useContext, useState } from "react";

import { StyledQuestion } from "./Quiz.styled";

import Answers from "./Answers";
import Timer from "../Timer/Timer";

import QuizContext from "../../contexts/quiz";
import createMarkup from "../../helpers/createMarkup";

const Question = () => {
    const [isAnswered, setIsAnswered] = useState(false);

    const { questions, tries, checkAnswer } = useContext(QuizContext);
    const { question } = questions[tries];

    const handleCheckAnswer = correct => {
        if (isAnswered) return;
        setIsAnswered(true);
        setTimeout(() => {
            checkAnswer(correct);
            setIsAnswered(false);
        }, 1000);
    }

    return (
        <StyledQuestion>
            <h4 dangerouslySetInnerHTML={createMarkup(question)} />
            <Answers 
                isAnswered={isAnswered}
                handleCheckAnswer={handleCheckAnswer} 
            />
            {isAnswered || <Timer time={15} timeOver={handleCheckAnswer} />}
        </StyledQuestion>
    );
}

export default Question;
