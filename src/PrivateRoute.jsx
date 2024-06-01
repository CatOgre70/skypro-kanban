import { Navigate, Outlet } from "react-router-dom";
import {AppRoutes} from "./data.js";
import {useUserContext} from "./contexts/user.js";


function PrivateRoute() {
    const {isUserLoggedIn} = useUserContext();

    return isUserLoggedIn ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}

export default PrivateRoute;