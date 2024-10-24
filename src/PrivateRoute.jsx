import { Navigate, Outlet } from "react-router-dom";
import {AppRoutes} from "./data.js";
import {UserContext} from "./contexts/user.js";
import {useContext} from "react";


function PrivateRoute() {
    const {user} = useContext(UserContext);

    return user ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}

export default PrivateRoute;