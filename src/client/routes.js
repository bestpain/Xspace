import HomePage from "./pages/home/home.component";
import NotFound from "./pages/notFound/notFound.component";
import App from "./pages/App/app.component";
import ResultsPage from './pages/filterresults/filterresults.component'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...ResultsPage,
        path: "/filter",
        exact: true,
      },   
      {
        ...NotFound
      }
    ],
  },
];
