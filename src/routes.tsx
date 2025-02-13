import { RouteObject } from "react-router";
import ErrorElement from "./components/ErrorElement";
import ProtectedRoute from "./components/ProtectedRoute";
import RootLayout from "./components/RootLayout";
import AboutProject from "./pages/AboutProject";
import MyTickets from "./pages/MyTickets";
import Step1Selection from "./pages/Step1Selection";
import Step2Details from "./pages/Step2Details";
import Step3Printout from "./pages/Step3Printout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Step1Selection />,
      },
      {
        path: "/details",
        element: <Step2Details />,
      },
      {
        path: "/downloadticket",
        element: (
          <ProtectedRoute>
            <Step3Printout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutProject />,
      },
      {
        path: "/tickets",
        element: <MyTickets />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorElement />,
  },
];
