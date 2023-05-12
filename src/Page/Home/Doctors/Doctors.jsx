import Doctor1 from "../../../assets/doctor-1.jpg";
import Doctor2 from "../../../assets/doctor-2.jpg";
import Doctor3 from "../../../assets/doctor-3.jpg";
import { fadeIn } from "../../../variants";
import { motion } from "framer-motion";
const Doctors = () => {
  return (
    <div className="bg-white">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center pt-12 space-y-4 "
      >
        <small className="text-green-500 pt-12 text-xl font-semibold">
          Our Doctors
        </small>
        <h3 className="text-5xl font-bold text-black">Our Expert Doctors</h3>
        <p className="text-xl text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          perferendis deleniti illum <br /> necessitati voluptates ipsum,
          ratione dolorum veritatis minus mollitia placeat.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-8 px-16 "
      >
        <img className="rounded-md" src={Doctor1} alt="Doctor1" />
        <img className="rounded-md" src={Doctor2} alt="Doctor2" />
        <img className="rounded-md" src={Doctor3} alt="Doctor3" />
      </motion.div>
    </div>
  );
};

export default Doctors;
