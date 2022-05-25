import { Fragment, useState } from "react";

import QuizContext from "../../contexts/quiz";

import Counter from "../Counter/Counter";
import Question from "./Question";
import Scoreboard from "../Scoreboard/Scoreboard";

const Quiz = ({ questions, quit }) => {
    const [tries, setTries] = useState(0);
    const [points, setPoints] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const checkAnswer = correct => {
        setTries(tries + 1);
        setPoints(points + correct);
        setGameOver(tries === questions.length - 1);
    }

    return (
        <div>
            <QuizContext.Provider value={{ questions, tries, quit, checkAnswer }}>
                {gameOver ? (
                        <Scoreboard 
                            points={points} 
                            tries={tries}
                        />
                    ) : (
                        <Fragment>
                            <Counter />
                            <Question />
                        </Fragment>
                    )}
            </QuizContext.Provider>
        </div>
    );
}

export default Quiz;
