import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../Pages/DashBoard/DashBoard/DashBoard";
import ManageDoctors from "../Pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointment from "../Pages/DashBoard/MyAppointment/MyAppointment";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Home from "../Pages/Home/Home/Home";

import Login from "../Pages/Login/Login";
import DisplayError from "../Pages/Shared/DisplayError";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoc',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manageDoc',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-red.vercel.app/bookings/${params.id}`)
            },
        ]

    }
])