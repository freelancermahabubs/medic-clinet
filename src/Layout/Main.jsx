import { Outlet } from "react-router-dom";
import NavbarSocial from "../Shared/NavbarSocial/NavbarSocial";
import NavbarServices from "../Shared/NavbarServices/NavbarServices";

const Main = () => {
  return (
    <div>
      <NavbarSocial />
      <NavbarServices />
      <Outlet />
    </div>
  );
};

export default Main;
