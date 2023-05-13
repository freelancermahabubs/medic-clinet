import banner from "../../../assets/banner-bg.jpg";
import AboutUs from "../AboutUs/AboutUs";
import Departments from "../Departments/Departments";
import Doctors from "../Doctors/Doctors";
import Header from "../Header/Header";
import Rating from "../Rating/Rating";
const Home = () => {
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
