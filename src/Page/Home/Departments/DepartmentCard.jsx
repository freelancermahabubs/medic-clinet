import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { fadeIn } from "../../../variants";
import { motion } from "framer-motion";
const DepartmentCard = ({ medicine }) => {
  const { _id, title, img, price } = medicine;
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="card w-full  bg-white shadow-xl"
    >
      <figure className="px-10 pt-10">
        <img src={img} alt="Img" className="rounded-xl min-h-full w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex">
          <p className="text-xl text-orange-500 ">Price: ${price}</p>

          <div>
            <Link to={`/book/${_id}`}>
              <button className="text-xl text-orange-500">
                <AiOutlineArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DepartmentCard;
