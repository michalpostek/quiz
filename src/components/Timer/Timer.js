import { useEffect, useState } from "react";

import { StyledTimer } from "./Timer.styled";

const Timer = ({ time, timeOver }) => {
    const [timeLeft, setTimeLeft] = useState(time);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!timeLeft) {
                timeOver(false);
                setTimeLeft(time);
            }
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);
    
    return (
        <StyledTimer>
            <h6>
                {timeLeft}
            </h6>
            <p>
                seconds left
            </p>
        </StyledTimer>
    );
}

export default Timer;
