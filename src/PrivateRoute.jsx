import { Navigate, Outlet } from "react-router-dom";
import {AppRoutes} from "./data.js";
import {UserContext} from "./contexts/user.js";
import {useContext} from "react";


function PrivateRoute() {
    const {user} = useContext(UserContext);

    // function isUserLoggedIn() {
    //     return user !== null && user !== undefined && user.token !== undefined && user.token !== null && user.token !== "";
    // }

    return user ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}

export default PrivateRoute;