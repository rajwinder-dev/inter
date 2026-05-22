import { createBrowserRouter } from "react-router"; // or "react-router-dom"
import DeveloperLandingPage from "./features/home/HomePage";
import AIAuditFormPage from "./features/form/AIAuditFormPage";
import AuditResultsPage from "./features/result/AuditResultpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DeveloperLandingPage />,
  },
  {
    path: "/org",
    element: <AIAuditFormPage />,
  },
  {
    path: "/result",
    element: <AuditResultsPage />,
  },
]);

export default router;
