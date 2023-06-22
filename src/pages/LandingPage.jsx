import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/GlobalComponent/Footer";
import Navbar from "../components/GlobalComponent/Navbar";
import Benefit from "../components/LandingPage/Benefit";
import CourseSection from "../components/LandingPage/CourseSection";
import Highlight from "../components/LandingPage/Highlight";
import MainLayout from "../layout/MainLayout";

const LandingPage = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <Highlight />
          <Benefit />
          <CourseSection />
        </div>
        <Footer />
      </MainLayout>
    </>
  );
};

export default LandingPage;
