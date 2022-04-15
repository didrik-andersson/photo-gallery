import {
  Home,
  Gallery,
  ItemPage,
  About,
  NoMatch,
  SearchPage,
  Discover
} from "../pages/index";
import { MainLayout } from "../layouts";

export default function useRouter() {
  let routes2 = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/gallery", element: <Gallery /> },
        {
          path: "/search/:queryParam",
          element: <SearchPage />,
        },
        {
          path: "/item/:id",
          element: (
            <ItemPage
              breadcrumbs={[
                { label: "Hem", path: "/" },
                { label: "Galleri", path: "/gallery" },
              ]}
            />
          ),
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];

  let routes = [
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/om-oss",
          element: <About />,
        },
        {
          path: "/utforska",
          element: <Discover />,
        },
        {
          path: "/utforska/:category",
          element: <Gallery />,
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
    {
      element: <MainLayout searchBar />,
      children: [
        {
          path: "/:category/search/:queryParam",
          element: <SearchPage />,
        },
        {
          path: "/:category/:id",
          element: (
            <ItemPage
              breadcrumbs={[
                { label: "Hem", path: "/" },
                { label: ":id", path: "/gallery" },
              ]}
            />
          ),
        },
      ],
    },
  ];

  return {
    routes,
  };
}
