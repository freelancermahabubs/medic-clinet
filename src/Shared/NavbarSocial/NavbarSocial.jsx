import {
  GrFacebookOption,
  GrYoutube,
  GrLinkedin,
  GrSkype,
  GrInstagram,
} from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { MdAddIcCall, MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const NavbarSocial = () => {
  return (
    <div className="navbar flex flex-col md:flex-row lg:flex-row justify-between  bg-gray-200  lg:px-20">
      <div className="">
        <Link className=" normal-case text-xl flex gap-x-2 ">
          <MdAddIcCall className="rounded-full text-green-700 hover:bg-emerald-500  bg-slate-300 px-2 py-1 cursor-pointer hover:text-white text-3xl" />
          <small>Call Us: +464 145 684 325</small>
        </Link>
        <Link className=" normal-case text-xl ml-2 flex gap-x-2 ">
          <MdOutlineEmail className="rounded-full text-green-700 hover:bg-emerald-500  bg-slate-300 px-2 py-1 cursor-pointer hover:text-white text-3xl" />
          <small>Email: medic@example.com</small>
        </Link>
      </div>

      <div className=" text-green-700  flex items-center lg:gap-x-6 md:gap-x-4 gap-2">
        <GrFacebookOption className="rounded-full  hover:bg-emerald-500  bg-slate-300 px-2 py-1 cursor-pointer hover:text-white text-3xl" />
        <FaTwitter className="rounded-full  hover:bg-emerald-500  bg-slate-300 px-2 py-1 cursor-pointer hover:text-white text-3xl" />
        <GrYoutube className="rounded-full  hover:bg-emerald-500  bg-slate-300 px-2 py-1 cursor-pointer hover:text-white text-3xl" />
        <GrLinkedin className="rounded-full  hover:bg-emerald-500  bg-slate-300 px-2 py-1 cursor-pointer hover:text-white text-3xl" />
        <GrSkype className="rounded-full  hover:bg-emerald-500  bg-slate-300 px-2 py-1 cursor-pointer hover:text-white text-3xl" />
        <GrInstagram className="rounded-full  hover:bg-emerald-500  bg-slate-300 px-2 py-1 cursor-pointer hover:text-white text-3xl" />
      </div>
    </div>
  );
};

export default NavbarSocial;
