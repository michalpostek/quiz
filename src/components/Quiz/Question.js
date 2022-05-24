import { useContext, useState } from "react";

import { StyledQuestion } from "./Quiz.styled";

import Answers from "./Answers";
import Timer from "../Timer/Timer";

import QuizContext from "../../contexts/quiz";
import createMarkup from "../../helpers/createMarkup";

const Question = () => {
    const [isAnswered, setIsAnswered] = useState(false);

    const { questions, tries, checkAnswer } = useContext(QuizContext);
    const { question, category } = questions[tries];

    const handleCheckAnswer = correct => {
        if (isAnswered) return;
        setIsAnswered(true);
        setTimeout(() => {
            checkAnswer(correct);
            setIsAnswered(false);
        }, 0);
    }

    return (
        <StyledQuestion>
            <h4 dangerouslySetInnerHTML={createMarkup(question)} />
            <h5>{category}</h5>
            <Answers 
                isAnswered={isAnswered}
                handleCheckAnswer={handleCheckAnswer} 
            />
            {isAnswered || <Timer time={10} timeOver={handleCheckAnswer} />}
        </StyledQuestion>
    );
}

export default Question;
