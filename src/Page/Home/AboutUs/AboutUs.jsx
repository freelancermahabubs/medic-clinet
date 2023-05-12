import { Link } from "react-router-dom";
import about from "../../../assets/about-img.jpg";
import { BsSignTurnRightFill } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { fadeIn } from "../../../variants";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div className="grid lg:grid-cols-2  overflow-hidden items-center md:grid-cols-1 justify-between">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-8 lg:mt-0 md:mt-8 space-y-4 ps-10 px-8"
      >
        <p className="text-green-500 font-semibold">About Us</p>
        <h2 className="text-black text-6xl font-bold">
          Tackle The Challenge Of Delivering Health Care
        </h2>
        <p className="space-y-3 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi
          consectetur adipiscing elit incididunt labore dolore magna.
        </p>
        <div className="text-xl text-gray-500 font-semibold">
          <span className="flex items-center gap-2">
            <BsSignTurnRightFill className="text-green-500" />
            <small>Consultations Wif Specialized Pediatricians</small>
          </span>
          <span className="flex items-center gap-2">
            <BsSignTurnRightFill className="text-green-500" />
            <small>A Wide Range Of Laboratory Studies</small>
          </span>
          <span className="flex items-center gap-2">
            <BsSignTurnRightFill className="text-green-500" />
            <small>Ultrasound Examination</small>
          </span>
          <span className="flex items-center gap-2">
            <BsSignTurnRightFill className="text-green-500" />
            <small>ECG, Echocardiography</small>
          </span>
        </div>
        <div>
          <Link className="btn btn-wide text-xl bg-green-500 text-white hover:bg-black-500 hover:text-white font-semibold">
            More About Us
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-12  relative "
      >
        <img className="rounded-lg" src={about} alt="about" />
        <MdSlowMotionVideo className="absolute top-80 left-72 rounded-full text-green-700 hover:bg-emerald-500  bg-slate-300 px-2 py-1 cursor-pointer hover:text-white text-6xl" />
      </motion.div>
    </div>
  );
};

export default AboutUs;
