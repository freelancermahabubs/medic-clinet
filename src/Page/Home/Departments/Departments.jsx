import { useEffect, useState } from "react";
import DepartmentCard from "./DepartmentCard";
import { fadeIn } from "../../../variants";
import { motion } from "framer-motion";
const Departments = () => {
  const [medicines, setMedicines] = useState([]);
  const [viewAllDepartments, setViewAllDepartments] = useState(false);
  useEffect(() => {
    fetch("https://medic-server.vercel.app/medices")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
  }, []);
  const handleSellAllDepartments = () => {
    setViewAllDepartments(true);
  };
  const medicinesData = viewAllDepartments ? medicines : medicines.slice(0, 6);
  return (
    <div className="bg-gray-100 pt-12">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center space-y-4"
      >
        <small className="text-green-500 text-2xl font-semibold">
          Our Departments
        </small>
        <h2 className="text-5xl font-bold">
          Our Healthcare <span className="text-green-500">Departments</span>
        </h2>
        <p className="text-gray-400 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          perferendis deleniti illum <br /> necessitati voluptates ipsum,
          ratione dolorum veritatis minus mollitia placeat.
        </p>
      </motion.div>
      <div className="grid my-4 lg:grid-cols-3 px-16 mt-12 grid-cols-1 md:grid-cols-2 gap-6">
        {medicinesData.map((medicine) => (
          <DepartmentCard key={medicine._id} medicine={medicine} />
        ))}
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center"
      >
        {!viewAllDepartments && (
          <button
            onClick={handleSellAllDepartments}
            className="btn text-xl w-46  bg-green-500 text-white hover:bg-black-500 hover:text-white font-semibold  mb-5"
          >
            View All Departments
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default Departments;
