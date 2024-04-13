import './App.css'
import PopNewCard from "./components/popups/PopNewCard/PopNewCard.jsx";
import PopExit from "./components/popups/PopExit/PopExit.jsx";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse.jsx";
import HomePage from "./components/Pages/HomePage.jsx";
import {useState} from "react";
import {AppRoutes, cardList, isAuth} from "./data.js";
import {Wrapper} from "./App.styled.js";
import {Route, Routes, useParams} from "react-router-dom";
import Login from "./components/Pages/Login.jsx";
import Registration from "./components/Pages/Registration.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PageNotFound from "./components/Pages/PageNotFound.jsx";
import ExitPage from "./components/Pages/ExitPage.jsx";

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

    let {cardId} = useParams();

    return (
        <>
            <Wrapper>
                <Routes>
                    <Route path={AppRoutes.LOGIN} element={<Login />}/>
                    <Route path={AppRoutes.REGISTER} element={<Registration />}/>
                    <Route path={AppRoutes.NOT_FOUND} element={<PageNotFound />}/>
                    <Route element={<PrivateRoute isAuth={isAuth} />}>
                        <Route path={AppRoutes.ADD_NEW_CARD} element={<PopNewCard />}/>
                        <Route path={AppRoutes.EDIT_CARD} element = {<PopBrowse cardId={cardId} />}/>
                        <Route path={AppRoutes.HOME} element = {<HomePage onCardAdd={onCardAdd} cards={cards} />}/>
                        <Route path={AppRoutes.LOGOUT} element={<ExitPage onCardAdd={onCardAdd} cards={cards}/>}/>
                    </Route>
                </Routes>
            </Wrapper>
        </>
    )
}

export default App
