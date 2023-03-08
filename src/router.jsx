import { createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound.jsx"
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard.jsx"

// ------------------------------------------------------
// 01
const router = createBrowserRouter([
    {
        path: "/users",
        element: <Users />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "*",
        element: <NotFound />
    },
]);
// ------------------------------------------------------

// // ------------------------------------------------------
// // 02
// // bring in the components
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <DefaultLayout />
//   },
//   {
//     path: '/',
//     element: <GuestLayout />
//   },
//   {
//     path: "/users",
//     element: <Users />
//   },
//   {
//     path: "/login",
//     element: <Login />
//   },
//   {
//     path: "/signup",
//     element: <Signup />
//   },
//   {
//     path: "*",
//     element: <NotFound />
//   },
// ]);
// // ------------------------------------------------------

// // ------------------------------------------------------
// // 03
// // the other three roles need to become children of either default or role
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <DefaultLayout />,
//     children : [
//       {
//         path: "/dashboard",
//         element: <Dashboard />
//       },
//       {
//         path: "/users",
//         element: <Users />
//       },
//     ]
//   },
//   {
//     path: '/',
//     element: <GuestLayout />,
//     children : [
//       {
//         path: "/login",
//         element: <Login />
//       },
//       {
//         path: "/signup",
//         element: <Signup />
//       }
//     ]
//   },
//   {
//     path: "*",
//     element: <NotFound />
//   },
// ]);
// // now we have two main paths default layout and guestlayout
// // goto GuestLayout 02
// // ------------------------------------------------------


export default router;
