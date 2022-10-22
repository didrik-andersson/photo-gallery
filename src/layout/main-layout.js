import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/index';

export default function Layout({ searchBar }) {
  return (
    <>
      <Header searchBar={searchBar} />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
