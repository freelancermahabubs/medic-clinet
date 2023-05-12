import { GiConfirmed } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";
import { AiOutlineSetting } from "react-icons/ai";
import CountUp from "react-countup";
import { fadeIn } from "../../../variants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Rating = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-gray-100 mt-12 lg:px-12 lg:h-80 sm:h-1/6 grid gap-5 lg:grid-cols-4"
    >
      <div className=" bg-white shadow-xl w-[300px] mx-auto my-6 sm:mt-12 text-center rounded-md">
        <GiConfirmed className="mx-auto text-5xl rounded-full  hover:bg-emerald-500  bg-slate-200 px-2 py-1 cursor-pointer hover:text-white  my-8 text-green-500" />
        <small className="text-6xl font-semibold">
          {ref ? <CountUp start={0} end={540} duration={6} /> : null} +
        </small>
        <p className="text-green-500 text-xl  mb-3 font-semibold mt-2">
          Expert Doctors
        </p>
      </div>
      <div className=" bg-white shadow-xl w-[300px] mx-auto my-6 sm:mt-12 text-center rounded-md">
        <RiAccountCircleFill className="mx-auto text-5xl rounded-full  hover:bg-emerald-500  bg-slate-200 px-2 py-1 cursor-pointer hover:text-white  my-8 text-green-500" />
        <small className="text-6xl font-semibold">
          {ref ? <CountUp start={0} end={990} duration={6} /> : null} +
        </small>
        <p className="text-green-500 text-xl mb-3 font-semibold mt-2">
          Successful Story
        </p>
      </div>
      <div className=" bg-white shadow-xl w-[300px] mx-auto my-6 sm:mt-12 text-center rounded-md">
        <GiTrophyCup className="mx-auto text-5xl rounded-full  hover:bg-emerald-500  bg-slate-200 px-2 py-1 cursor-pointer hover:text-white  my-8 text-green-500" />

        <small className="text-6xl font-semibold">
          {ref ? <CountUp start={0} end={(3, 500)} duration={6} /> : null} +
        </small>
        <p className="text-green-500 text-xl mb-3 font-semibold mt-2">
          Global Presence
        </p>
      </div>
      <div className=" bg-white shadow-xl w-[300px] mx-auto my-6 sm:mt-12 text-center rounded-md">
        <AiOutlineSetting className="mx-auto text-5xl rounded-full  hover:bg-emerald-500  bg-slate-200 px-2 py-1 cursor-pointer hover:text-white  my-8 text-green-500" />

        <small className="text-6xl font-semibold">
          {ref ? <CountUp start={0} end={54} duration={6} /> : null} +
        </small>
        <p className="text-green-500 text-xl mb-3 font-semibold mt-2">
          Experiences
        </p>
      </div>
    </motion.div>
  );
};

export default Rating;
