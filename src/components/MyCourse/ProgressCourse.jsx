import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/style-mycourse.css";
import { ProgressCSS, ProgressGIT } from "../../assets/images";
import { useState } from "react";

const ProgressCourse = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [progress, useProgress] = useState([
    {
      img: ProgressCSS,
      title: "CSS Dasar",
      subtitle: "Junior",
      valueProgress: 10,
      textProgress: "10%",
    },
    {
      img: ProgressGIT,
      title: "Github Dasar",
      subtitle: "Junior",
      valueProgress: 3,
      textProgress: "3%",
    },
  ]);

  return (
    <>
      <div className="row">
        <div className="col-12 px-3">
          <section className="progress-course bgr-light shadow-sm rounded p-4">
            <h1 className="header-progress-course mb-3">Lanjut Belajar</h1>
            <Slider {...settings}>
              {progress.map((item, index) => (
                <div
                  className="card-progress-course-wrapper d-flex justify-content-center"
                  key={index}
                >
                  <div className="card-progress-course p-5 w-75">
                    <div className="row">
                      <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <img src={item.img} className="img-fluid" />
                      </div>
                      <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <div className="content-progress-course-wrapper">
                          <h1 className="progress-course-title d-flex justify-content-end">
                            {item.title}
                          </h1>
                          <h3 className="progress-course-subtitle d-flex justify-content-end">
                            {item.subtitle}
                          </h3>
                          <div className="progress mb-3">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={item.valueProgress}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {item.textProgress}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProgressCourse;
