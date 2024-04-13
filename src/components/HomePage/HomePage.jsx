import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";

const HomePage = ({onCardAdd, cards}) => (
    <>
        <Header onCardAdd={onCardAdd}/>
        <Main cards={cards}/>
    </>
);

export default HomePage;