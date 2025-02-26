import {
  RouterProvider,
  createHashRouter,
  createBrowserRouter,
} from "react-router-dom";
import Nav from "./nav";
import Jsdom from "./jsdom";
import "./assets/app.css";
import GenerPorm from "./components/genepoem";
import Code from "./components/code";
import Detail from "./components/detail";
import MdTemplate from "./components/MdTemplate";
import Err from "./components/err";
import Login from "./components/login";
import History from "./components/history";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
  },
  {
    path: "/mind",
    element: <Jsdom />,
  },
  {
    path: "/poem",
    element: <GenerPorm />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/code",
    element: <Code />,
  },
  {
    path: "/detail",
    element: <Detail />,

    children: [
      {
        path: ":id",
        loader: ({ params }) => params.id,
        element: <MdTemplate />,
      },
    ],
  },
  {
    path: "*",
    element: <Err />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
