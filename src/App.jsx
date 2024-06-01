import './App.css'
import PopNewCard from "./components/popups/PopNewCard/PopNewCard.jsx";
import PopExit from "./components/popups/PopExit/PopExit.jsx";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse.jsx";
import HomePage from "./components/Pages/HomePage.jsx";
import {AppRoutes} from "./data.js";
import {Wrapper} from "./App.styled.js";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Pages/Login.jsx";
import Registration from "./components/Pages/Registration.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PageNotFound from "./components/Pages/PageNotFound.jsx";
import {getUserDataFromLocalStorage} from "./localstorageops.js";
import {useState} from "react";
import {UserContext} from "./contexts/user.js";

function App() {


    const [user, setUser] = useState(getUserDataFromLocalStorage());

    function updateUser(newUser) {
        setUser(newUser);
    }

    function isUserLoggedIn() {
        return user !== null && user.token !== undefined && user.token !== null;
    }


    return (
        <>
            <Wrapper>
                <UserContext.Provider value={{user, updateUser, isUserLoggedIn}}>
                    <Routes>
                        <Route path={AppRoutes.LOGIN} element={<Login />}/>
                        <Route path={AppRoutes.REGISTER} element={<Registration />}/>
                        <Route path={AppRoutes.NOT_FOUND} element={<PageNotFound />}/>
                        <Route element={<PrivateRoute isAuth={isUserLoggedIn()} />}>
                            <Route path={AppRoutes.HOME} element = {<HomePage />}>
                                <Route path={AppRoutes.ADD_NEW_CARD} element={<PopNewCard />}/>
                                <Route path={AppRoutes.EDIT_CARD} element = {<PopBrowse />}/>
                                <Route path={AppRoutes.LOGOUT} element={<PopExit />}/>
                            </Route>
                        </Route>
                    </Routes>
                </UserContext.Provider>
            </Wrapper>
        </>
    )
}

export default App
