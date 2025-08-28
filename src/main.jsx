import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import News from "./components/News.jsx"
import Navbar from "./components/Navbar.jsx";
const pageSize = 9;
const router = createBrowserRouter([
  {
    path: "/",
    element: <> <Navbar /> <News pageSize={pageSize}  key="general" country="us" category="general"/>, </>
  },
  {
    path: "/business",
    element: <> <Navbar /> <News pageSize={pageSize}  key="business" country="us" category="business" />, </>
  },
  {
    path: "/entertainment",
    element: <> <Navbar /> <News pageSize={pageSize}  key="entertainment" country="us" category="entertainment" />, </>
  },
  {
    path: "/general",
    element: <> <Navbar /> <News pageSize={pageSize}  key="general" country="us" category="general" />, </>
  },
  {
    path: "/health",
    element: <> <Navbar /> <News pageSize={pageSize}  key="health" country="us" category="health" />, </>
  },
  {
    path: "/science",
    element: <> <Navbar /> <News pageSize={pageSize}  key="science" country="us" category="science" />, </>
  },
  {
    path: "/sports",
    element: <> <Navbar /> <News pageSize={pageSize}  key="sports" country="us" category="sports" />, </>
  },
  {
    path: "/technology",
    element: <> <Navbar /> <News pageSize={pageSize}  key="technology" country="us" category="technology" />, </>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>
);
