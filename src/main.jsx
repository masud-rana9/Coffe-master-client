import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffe from "./components/AddCoffe.jsx";
import UpdateCoffe from "./components/UpdateCoffe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:3000/coffe"),
  },
  {
    path: "/addcoffe",
    element: <AddCoffe />,
  },
  {
    path: "/updatecoffe/:id",
    element: <UpdateCoffe />,
    loader: ({ params }) => fetch(`http://localhost:3000/coffe/${params.id}`),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
