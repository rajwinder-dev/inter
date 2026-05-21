import { createBrowserRouter } from "react-router"; // or "react-router-dom"
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home page</div>,
  },
  {
    path: "/calculate",
    element: <div>calculate page</div>,
  },
  {
    path: "/result",
    element: <div>result page </div>,
  },
]);

export default router;
