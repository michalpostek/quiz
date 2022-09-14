import { useContext } from "react";

import { StyledGameInfo, ProgressBar } from "./GameInfo.styled";

import QuizContext from "../../contexts/quiz";

const GameInfo = () => {
    const { tries, questions, questions: { length } } = useContext(QuizContext);
    const progress = tries / length * 100;
    const { category } = questions[0];

    return (
        <StyledGameInfo>
            <p>
                {category}
            </p>
            <ProgressBar 
                progress={progress} 
            />
        </StyledGameInfo>
    );
}

export default GameInfo;
