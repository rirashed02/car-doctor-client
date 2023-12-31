import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogReg from "../Layout/logReg";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CheckOut from "../pages/Shared/CheckOut/CheckOut";
import BookService from "../pages/Shared/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/checkout/:id',
                element:<CheckOut></CheckOut>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'bookings',
                element:<PrivateRouter><Bookings></Bookings></PrivateRouter>
            },
            {
                path:'/book/:id',
                element:<PrivateRouter><BookService></BookService>,</PrivateRouter>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element:<LogReg></LogReg>,
        children:[
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;