import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoute } from "./constants";
import Layout from "@/components/Layout/Layout";
import { LazyContacts } from "@/components/Contacts/LazyAbout";
import { LazyAbout } from "@/components/About/LazyAbout";
import { LazyShop } from "@/components/Shop/LazyAbout";
import { Suspense } from "react";
import Spinner from "@/components/Spinner/Spinner";
import { LazyGallery } from "./components/Gallery/LazyAbout";
import App from "./components/App/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: AppRoute.Root,
        element: <App />,
      },
      {
        path: AppRoute.Contacts,
        element: <Suspense fallback={<Spinner />}><LazyContacts /></Suspense>,
      },
      {
        path: AppRoute.About,
        element: <Suspense fallback={<Spinner />}><LazyAbout /></Suspense>,
      },
      {
        path: AppRoute.Shop,
        element: <Suspense fallback={<Spinner />}><LazyShop /></Suspense>,
      },
      {
        path: AppRoute.Gallery,
        element: <Suspense fallback={<Spinner />}><LazyGallery /></Suspense>,
      },
    ],
  },
]);

const root = document.getElementById("root");

if (!root) throw new Error("root not found");

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
