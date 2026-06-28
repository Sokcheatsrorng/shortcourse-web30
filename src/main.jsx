
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";
import AboutPage from './pages/AboutPage';
import App from './App';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/',
    element: <App/>
  },{
    path:'/products',
    element: <ProductPage/>
  },
  {
    path:'/products/:slug',//dynamic route
    element: <ProductDetailPage/>
  },
  {
    path: '*',// page not found customize
    element: <NotFoundPage/>
  }
])

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

