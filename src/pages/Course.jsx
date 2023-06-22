import "../assets/css/style-course.css";
import CourseList from "../components/Course/CourseList";
import Navbar from "../components/GlobalComponent/Navbar";
import Footer from "../components/GlobalComponent/Footer";
import MainLayout from "../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetCourse } from "../redux/actions/CourseAction";

const Course = () => {
  const { dataCourse } = useSelector((state) => state.courseReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataCourse === null) {
      dispatch(GetCourse());
    }
  }, [dispatch, dataCourse]);
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <section className="class-list my-2 px-3">
            <div className="course-banner">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-xl-12">
                  <div className="banner-wrapper">
                    <h1 className="title-banner color-light">
                      Ambil kelas kapan saja dan <br />
                      dimana saja!
                    </h1>
                    <h3 className="sub-title-banner color-light mt-3">
                      Ayo ambil kelasmu sekarang dan berpetualang <br />
                      bersama kami
                    </h3>
                  </div>

                  <CourseList dataCourse={dataCourse} />
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </MainLayout>
    </>
  );
};

export default Course;
