import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import BrowsePage from "./routes/BrowsePage";
import PageLayout from "./modules/page/components/PageLayout";
import BrowseLayout from "./modules/browse/components/BrowseLayout";
import ClassLayout from "./modules/class-home/components/ClassLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "browse/",
        element: <BrowseLayout />,
        children: [
          {
            path: "",
            element: <BrowsePage />,
          },
          {
            path: "animation",
            element: <div></div>,
          },
        ],
      },
      {
        path: "classes/",
        element: <ClassLayout />,
        children: [
          {
            path: "",
            element: <></>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
