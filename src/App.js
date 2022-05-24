import { useState } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";

import shuffleArray from "./helpers/shuffleArray";

import GlobalStyles from "./styles/GlobalStyles";
import { fontSizes } from "./styles/theme/fontSizes";
import { lightColors, darkColors } from "./styles/theme/colors";
import { Wrapper } from "./styles/Wrapper";
import { MainSection } from "./styles/MainSection";

import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";

const App = () => {
	const [colors, setColors] = useState(darkColors);
	const [questions, setQuestions] = useState(null);
	const [error, setError] = useState(null);

	const toggleColors = () => {
		colors === lightColors
			? setColors(darkColors)
			: setColors(lightColors);
	}

	const startGame = category => {
		axios
			.get(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
			.then(({ data: { results } }) => {
				const questions = results.map(({ category, question, correct_answer, incorrect_answers }) => {
					const answers = shuffleArray([correct_answer, ...incorrect_answers]);
    				const correctAnswerIndex = answers.findIndex(answer => answer === correct_answer);

					return {
						category,
						question,
						answers,
						correctAnswerIndex,
					}
				});
				setQuestions(questions);
			})
			.catch(error => setError(error));
	}

	const quitGame = () => setQuestions(null);

	return (
		<ThemeProvider theme={{colors, fontSizes}}>
			<GlobalStyles />
			<Wrapper>
				<Header 
					questions={questions}
					quitGame={quitGame} 
					toggleColors={toggleColors} 
				/>
				<MainSection>
					{questions 
						? <Quiz quit={quitGame} questions={questions} /> 
						: <Home startGame={startGame} />
					}
				</MainSection>
			</Wrapper>
		</ThemeProvider>
	);
}

export default App;
