import useFetch from "../../hooks/useFetch";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import { StyledHome, CategoriesWrapper, Message } from "./Home.styled";

const Home = ({ startGame }) => {
    const { data, error, loading } = useFetch(`https://opentdb.com/api_category.php`);

    if (loading) return <LoadingSpinner />
    if (error) return <Message>Something went wrong... :/</Message>

    return (
        <StyledHome>
            <h2>
                Select a category
            </h2>
            <CategoriesWrapper>
                {data.data.trivia_categories.map(category => {
                    const { id, name } = category;
                    const handleStartGame = () => startGame(id);

                    return (
                        <button onClick={handleStartGame} key={id}>
                            {name}
                        </button>
                    )
                })}
            </CategoriesWrapper>
        </StyledHome>
    );
}

export default Home;
