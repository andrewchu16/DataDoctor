import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const PrivateRoute = () => {
    const auth = useAuth();
    const token = auth?.accessToken;

    if (!token) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default PrivateRoute;
