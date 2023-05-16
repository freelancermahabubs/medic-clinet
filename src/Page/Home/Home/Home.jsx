import { useEffect, useState } from "react";
import banner from "../../../assets/banner-bg.jpg";
import AboutUs from "../AboutUs/AboutUs";
import Departments from "../Departments/Departments";
import Doctors from "../Doctors/Doctors";
import Header from "../Header/Header";
import Rating from "../Rating/Rating";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div
      style={{
        backgroundImage: ` url(${banner})`,
        backgroundRepeat: "no-repeat",
        minHeight: "70vh",
        width: "700",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <AboutUs />
      <Rating />
      <Doctors />
      <Departments />
    </div>
  );
};

export default Home;
