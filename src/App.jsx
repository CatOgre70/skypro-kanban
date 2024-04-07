import './App.css'
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import PopExit from "./components/popups/PopExit/PopExit.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import {useState} from "react";
import {cardList} from "./data.js";

function App() {

    const [cards, setCards] = useState(cardList);

    function onCardAdd() {
        const newCard = {
            id: cards.length + 1,
            theme: "Research",
            title: "Новая задача",
            date: "10.04.24",
            status: "Без статуса"
        }
        setCards([...cards, newCard]);
    }

    return (
        <>
            <div className="wrapper">
                  <PopExit />
                  <PopNewCard />
                  <PopBrowse />
                  <Header onCardAdd={onCardAdd}/>
                  <Main cards={cards}/>
            </div>
        </>
    )
}

export default App
