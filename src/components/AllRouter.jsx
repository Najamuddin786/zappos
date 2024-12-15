import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import AuthZappos from "../pages/Auth/AuthZappos";

export default function AllRouter(){

    return <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/AuthZappos'} element={<AuthZappos/>}/>
    </Routes>
}