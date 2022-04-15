import { Outlet } from "react-router-dom";
import { Header } from "../components/index";

export default function MainLayout({ searchBar }) {
  return (
    <>
      <Header searchBar={searchBar} />
      <Outlet />
    </>
  );
}
