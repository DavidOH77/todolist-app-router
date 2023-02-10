import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="container">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
