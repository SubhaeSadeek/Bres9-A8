import { createBrowserRouter } from "react-router-dom";
import Error from "../component/Error/Error";
import ProductDetails from "../component/ProductDetails/ProductDetails";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";

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
        ],
    },
])

export default router;