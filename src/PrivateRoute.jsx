import { Navigate, Outlet } from "react-router-dom";
import {AppRoutes} from "./data.js";


function PrivateRoute({ isAuth }) {
    return isAuth ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}

export default PrivateRoute;