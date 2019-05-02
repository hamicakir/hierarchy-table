import { lazy } from "react";

const Home = lazy(() => import("./containers/Home/Home"));
const CityDetail = lazy(() => import("./containers/CityDetail/CityDetail"));
const NotFound = lazy(() => import("./containers/NotFound"));

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/city-detail/:city-id",
    component: CityDetail,
    exact: false
  },
  {
    path: "*",
    component: NotFound,
    exact: false
  }
];
