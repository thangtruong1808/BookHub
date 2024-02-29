import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import AppContextProvider from "./components/context/bookContext.js";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import BookDetail from "./pages/BookDetail.tsx";
import BookCart from "./pages/BookCart.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/book/:ID",
//     element: <BookDetail />,
//   },
//   {
//     path: "/bookcart",
//     element: <BookCart />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:ID" element={<BookDetail />} />
          <Route path="/bookcart" element={<BookCart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>

    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
