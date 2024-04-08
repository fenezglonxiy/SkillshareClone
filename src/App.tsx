import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import BrowsePage from "./routes/BrowsePage";
import PageLayout from "./modules/page/components/PageLayout";
import BrowseLayout from "./modules/browse/components/BrowseLayout";
import ClassLayout from "./modules/class-home/components/ClassLayout";
import TeachLayout from "./modules/teach/components/TeachLayout";
import TeacherApplicationLayout from "./modules/teacher-apl/components/TeacherAplLayout";

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
      {
        path: "teach/",
        element: <TeachLayout />,
      },
      {
        path: "teach/apply",
        element: <TeacherApplicationLayout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
