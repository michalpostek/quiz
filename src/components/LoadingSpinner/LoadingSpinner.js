import { StyledLoadingSpinner } from "./LoadingSpinner.styled";

const LoadingSpinner = () => {
    return (
        <StyledLoadingSpinner>
            <img 
                src={`${process.env.PUBLIC_URL}/logo192.png`} 
                alt="React Logo" 
            />
            <p>
                Loading
            </p>
        </StyledLoadingSpinner>
    );
}

export default LoadingSpinner;
