import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import AddNewStock from "../page/AddNewStock";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/add-new-stock",
                element: <AddNewStock></AddNewStock>
            }
        ]
    }
]);
export default router;