import { Home, Gallery, ItemPage, About, NoMatch, SearchPage } from "../pages/index";
import { MainLayout } from "../layouts";

export default function useRouter() {
  let routes = [
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

  return {
    routes,
  };
}
