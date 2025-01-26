import { createBrowserRouter } from "react-router-dom";
import Error from "../component/Error/Error";
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
                element: <Home></Home>
            },
        ],
    },
])

export default router;