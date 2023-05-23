import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Budget from "./components/Budget";
import Country from "./components/Country";
import Login from "./components/Login";
import HomePage from "./components/Home";
import AdminPage from "./components/Admin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/budget",
        element: <Budget />
    },
    {
        path: "/country",
        element: <Country/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/admin/*",
        element: <AdminPage/>
    }
    // {
    //     path: "*",
    //     element: <h1>Not Found</h1>
    // }
])

export default router;