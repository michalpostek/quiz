import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const typingAnimation = keyframes`
    0% {
        content: '.';
    }

    33% {
        content: '..';
    }

    66% {
        content: '...';
    }

    100% {
        content: '';
    }
`;

const StyledLoadingSpinner = styled.div`
    img {
        margin: auto;
        animation: ${rotateAnimation} 2s linear infinite;
    }

    p {
        font-size: ${props => props.theme.fontSizes.large};
        position: relative;
    }

    p::after{
        content: '';
        animation: ${typingAnimation} 1s linear infinite;
    }
`;

const LoadingSpinner = () => {
    return (
        <StyledLoadingSpinner>
            <img src="./logo192.png" alt="React Logo" />
            <p>Loading</p>
        </StyledLoadingSpinner>
    );
}

export default LoadingSpinner;
