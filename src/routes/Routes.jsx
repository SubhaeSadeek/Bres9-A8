import { createBrowserRouter } from "react-router-dom";
import Error from "../component/Error/Error";
import ProductDetails from "../component/ProductDetails/ProductDetails";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import UserProfile from "../pages/UserProfile/UserProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/allproducts.json')
            },
            {
                path: "details/:productId",
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('/allproducts.json')
            },
            {
                path: "dashboard",
                element:<Dashboard></Dashboard>,
                loader: () => fetch('/allproducts.json')
            },
            {
                path: "statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/allproducts.json')

            },
            {
                path: "profile",
                element:<UserProfile></UserProfile>
            }
        ],
    },

])

export default router;