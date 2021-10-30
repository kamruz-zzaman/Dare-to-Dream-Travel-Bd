import { useContext } from "react";
import { AuthContext } from "../Component/Contex/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;