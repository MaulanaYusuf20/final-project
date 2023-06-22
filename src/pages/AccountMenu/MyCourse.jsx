import Navbar from "../../components/GlobalComponent/Navbar";
import SideBar from "../../components/GlobalComponent/SideBar";
import CompleteCourse from "../../components/MyCourse/CompleteCourse";
import ProgressCourse from "../../components/MyCourse/ProgressCourse";
import MainLayout from "../../layout/MainLayout";

const MyCourse = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <section className="my-course px-3 my-5">
            <h1 className="title color-dark poppins-medium">Kelas Saya</h1>
            <div className="row">
              <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 ">
                <ProgressCourse />
                <CompleteCourse />
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 ">
                <SideBar />
              </div>
            </div>
          </section>
        </div>
        <footer className="poppins footer-profile mt-5 d-flex justify-content-center">
          Copyright © 2022 SEVA ALL RIGHT RESERVED
        </footer>
      </MainLayout>
    </>
  );
};

export default MyCourse;
