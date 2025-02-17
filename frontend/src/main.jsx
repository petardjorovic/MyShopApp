import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import SingleProductPage from "./pages/SingleProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import store from "./store/store.js";

// * clerk
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/singleProduct/:productId",
        element: <SingleProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  </StrictMode>
);
