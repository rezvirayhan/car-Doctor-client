import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRout = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()
    if (loding) {
        return <center><progress className="progress w-56"></progress></center>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRout;