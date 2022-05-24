import { useContext } from "react";

import { StyledCounter } from "../../styles/Quiz.styled";

import QuizContext from "../../contexts/quiz";

const Counter = () => {
    const { tries, questions: { length } } = useContext(QuizContext);

    return (
        <StyledCounter>
            Question {tries + 1} / {length}
        </StyledCounter>
    );
}

export default Counter;
