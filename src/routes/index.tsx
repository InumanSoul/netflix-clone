import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../views/home/HomePage";
import MovieDetails from "../views/movies/MovieDetails";
import { Layout } from "../layout";
import MyList from "../views/MyList/MyList";
import Movies from "../views/movies/Movies";
import TvShows from "../views/TvShows/TvShows";
import RecentlyAdded from "../views/RecentlyAdded/RecentlyAdded";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true
      },
      {
        path: "tv-shows",
        element: <TvShows />
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movies/:id",
        element: <MovieDetails />,
      },
      {
        path: "recently-added",
        element: <RecentlyAdded />
      },
      {
        path: "my-list",
        element: <MyList />
      }
    ]
  }
])

const Router = () => <RouterProvider router={routes} />;

export default Router;