import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Error from "../Pages/Error/Error";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import ErrorForBookMarks from "../Pages/Error/ErrorForBookMarks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        loader: () => fetch('Doctor.json'),
        Component: Home
      },
      {
        path: "/DoctorDetails/:id",
        loader: () => fetch('Doctor.json'),
        Component: DoctorDetails
      },
      {
        path: "/Bookings",
        loader: () => fetch('Doctor.json'),
        Component: MyBookings,
        errorElement:<ErrorForBookMarks></ErrorForBookMarks>
      },
      {
        path: "/Blogs",
        loader: () => fetch('Blog.json'),
        Component: Blog
      },
    ]
  },
  {
    path: "/ContactUs",
    Component: ContactUs
  },
  {
    path: "*",
    Component: Error
  }
]);

export default router;