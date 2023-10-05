import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import Phone from "../Phone/Phone";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/phones.json')
            },
            {
                path: "/cart",
                element: <Cart></Cart>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/phones/:id",
                element: <Phone></Phone>,
                loader: () => fetch('/phones.json')
            }
        ]
    }
])

export default router;