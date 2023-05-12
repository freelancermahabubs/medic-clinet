import { Link } from "react-router-dom";
import bannerImg from "../../../assets/banner-img.png";
import { fadeIn } from "../../../variants";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="grid lg:grid-cols-2 overflow-hidden items-center md:grid-cols-1 justify-between">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-8 lg:mt-0 md:mt-8 space-y-4 ps-10 px-8"
      >
        <p className="text-green-500 font-semibold">Welcome To Medic</p>
        <h2 className="text-black text-6xl font-bold">
          Exceptional Medical Specialty Healthcare
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse
          ultrices gravida.
        </p>
        <div className="flex  gap-5">
          <Link className="btn btn-wide text-xl bg-green-500 text-white hover:bg-black-500 hover:text-white font-semibold">
            View Departments
          </Link>
          <Link to="/contactUs" className="btn hover:bg-green-500 text-white">
            Contact Us
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-2 ml-20"
      >
        <img
          className="lg:h-[650px] h-[480px] w-[400px] md:w-56 lg:w-[500px]"
          src={bannerImg}
          alt="bannerImg"
        />
      </motion.div>
    </div>
  );
};

export default Header;
