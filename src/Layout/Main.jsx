import { Outlet } from "react-router-dom";
import NavbarSocial from "../Shared/NavbarSocial/NavbarSocial";
import NavbarServices from "../Shared/NavbarServices/NavbarServices";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavbarSocial />
      <NavbarServices />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
