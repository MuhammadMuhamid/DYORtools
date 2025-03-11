import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { Home } from "./pages/Home";

import { AppLayout } from "./components/AppLayout";

// import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
// import { Pricing } from "./pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      // {
      //   path: "contact",
      //   element: <Contact />,
      // },
      // {
      //   path: "pricing",
      //   element: <Pricing />,
      // },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
