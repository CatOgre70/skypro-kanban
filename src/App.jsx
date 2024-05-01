import './App.css'
import PopNewCard from "./components/popups/PopNewCard/PopNewCard.jsx";
import PopExit from "./components/popups/PopExit/PopExit.jsx";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse.jsx";
import HomePage from "./components/Pages/HomePage.jsx";
import {AppRoutes, cardList, isAuth} from "./data.js";
import {Wrapper} from "./App.styled.js";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Pages/Login.jsx";
import Registration from "./components/Pages/Registration.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PageNotFound from "./components/Pages/PageNotFound.jsx";

function App() {

    return (
        <>
            <Wrapper>
                <Routes>
                    <Route path={AppRoutes.LOGIN} element={<Login />}/>
                    <Route path={AppRoutes.REGISTER} element={<Registration />}/>
                    <Route path={AppRoutes.NOT_FOUND} element={<PageNotFound />}/>
                    <Route element={<PrivateRoute isAuth={isAuth} />}>
                        <Route path={AppRoutes.HOME} element = {<HomePage cards={cardList}/>}>
                            <Route path={AppRoutes.ADD_NEW_CARD} element={<PopNewCard />}/>
                            <Route path={AppRoutes.EDIT_CARD} element = {<PopBrowse />}/>
                            <Route path={AppRoutes.LOGOUT} element={<PopExit />}/>
                        </Route>
                    </Route>
                </Routes>
            </Wrapper>
        </>
    )
}

export default App
