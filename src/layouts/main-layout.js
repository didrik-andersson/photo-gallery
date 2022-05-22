import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/index";

export default function MainLayout({ searchBar }) {
  return (
    <>
      <Header searchBar={searchBar} />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
