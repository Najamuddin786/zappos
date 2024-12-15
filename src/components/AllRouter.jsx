import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import AuthZappos from "../pages/Auth/AuthZappos";
import Product from "../pages/Product";

export default function AllRouter(){

    return <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/product'} element={<Product/>}/>
                
                <Route path={'/AuthZappos'} element={<AuthZappos/>}/>
    </Routes>
}