import { Navigate, Outlet } from "react-router-dom";
import {AppRoutes} from './App';

function PrivateRoute({ isAuth }) {
    return isAuth ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}

export default PrivateRoute;