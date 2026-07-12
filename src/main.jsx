import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import RootLayout from "./App";
import DashboardLayout from "./DashboardLayout/DashboardPage";
import UserDashboardPage from "./DashboardLayout/UserDashboardPage";
import SettingDashboardPage from "./DashboardLayout/SettingDashboardPage";
import FormPage from "./pages/FormPage";
import LoginPage from "./pages/LoginPage";
import TableComponent from "./DashboardLayout/TableComponent";
import StoreProvider from "./StoreProvider";
import ReduxPage from "./pages/ReduxPage";

const router = createBrowserRouter([
  {
    path: "/", //root Layout
    element: <RootLayout />, //nested route
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/products/:slug", //dynamic route
        element: <ProductDetailPage />,
      },
      {
        path: "/form",
        element: <FormPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: '/redux',
        element: <ReduxPage/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/users",
        element: <UserDashboardPage />,
      },
      {
        path: "/dashboard/setting",
        element: <SettingDashboardPage />,
      },
      {
        path: "/dashboard/table-data",
        element: <TableComponent />,
      },
    ],
  },

  {
    path: "*", // page not found customize
    element: <NotFoundPage />,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>,
);
