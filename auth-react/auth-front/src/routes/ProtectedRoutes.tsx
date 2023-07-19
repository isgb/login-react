
import {Outlet, Navigate} from "react-router-dom"
import { useAuth } from "../auth/AuthProvider"

export default function ProtectedRoutes(){
    
    const auth = useAuth();
    // const [isAuth, setIsAuth] = useState(false);

    return auth.isAuthenticated ? <Outlet/> : <Navigate to="/" />
}